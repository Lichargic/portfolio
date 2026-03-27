import { renderHook, act } from '@testing-library/react'
import { useCountUp } from '@/hooks/useCountUp'

describe('useCountUp', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(performance.now())
      return 0
    })
  })

  afterEach(() => {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  it('starts at 0', () => {
    const { result } = renderHook(() => useCountUp(10))
    expect(result.current.count).toBe(0)
  })

  it('returns a ref object', () => {
    const { result } = renderHook(() => useCountUp(10))
    expect(result.current.ref).toHaveProperty('current')
  })

  it('animates to target when IntersectionObserver fires', () => {
    let observerCallback: IntersectionObserverCallback | null = null
    ;(global.IntersectionObserver as jest.Mock).mockImplementation((cb) => {
      observerCallback = cb
      return { observe: jest.fn(), disconnect: jest.fn() }
    })

    const div = document.createElement('div')
    const { result } = renderHook(() => useCountUp(4, 0))
    Object.defineProperty(result.current.ref, 'current', { value: div, writable: true })

    act(() => {
      if (observerCallback) {
        observerCallback(
          [{ isIntersecting: true, target: div } as unknown as IntersectionObserverEntry],
          {} as unknown as IntersectionObserver
        )
      }
    })

    expect(result.current.count).toBe(4)
  })
})
