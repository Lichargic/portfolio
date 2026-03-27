import { renderHook } from '@testing-library/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

describe('useScrollReveal', () => {
  it('returns a ref', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(result.current).toHaveProperty('current')
  })

  it('attaches IntersectionObserver to the element', () => {
    const observeMock = jest.fn()
    ;(global.IntersectionObserver as jest.Mock).mockImplementation((cb) => ({
      observe: observeMock,
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))

    const div = document.createElement('div')
    document.body.appendChild(div)
    renderHook(() => {
      const ref = useScrollReveal<HTMLDivElement>()
      Object.defineProperty(ref, 'current', { value: div, writable: true })
      return ref
    })

    expect(global.IntersectionObserver).toHaveBeenCalled()
    document.body.removeChild(div)
  })

  it('sets data-revealed when element intersects', () => {
    let observerCallback: ((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void) | null = null
    ;(global.IntersectionObserver as jest.Mock).mockImplementation((cb) => {
      observerCallback = cb
      return { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() }
    })

    const div = document.createElement('div')
    document.body.appendChild(div)

    const { result } = renderHook(() => useScrollReveal<HTMLDivElement>())
    Object.defineProperty(result.current, 'current', { value: div, writable: true })

    if (observerCallback) {
      observerCallback(
        [{ isIntersecting: true, target: div } as unknown as IntersectionObserverEntry],
        {} as unknown as IntersectionObserver
      )
    }

    document.body.removeChild(div)
  })
})
