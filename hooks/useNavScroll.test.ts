import { renderHook, act } from '@testing-library/react'
import { useNavScroll } from '@/hooks/useNavScroll'

describe('useNavScroll', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 0 })
  })

  it('returns false when page has not scrolled', () => {
    const { result } = renderHook(() => useNavScroll())
    expect(result.current).toBe(false)
  })

  it('returns true when scrolled past threshold', () => {
    const { result } = renderHook(() => useNavScroll(40))
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 50 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)
  })

  it('returns false when scroll is at threshold', () => {
    const { result } = renderHook(() => useNavScroll(40))
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 40 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(false)
  })

  it('uses default threshold of 40', () => {
    const { result } = renderHook(() => useNavScroll())
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 41 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)
  })
})
