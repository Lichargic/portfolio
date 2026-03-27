import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let cancelFrame = () => {}
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (duration === 0) {
          setCount(target)
          return
        }
        let frameId: number | null = null
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) {
            frameId = requestAnimationFrame(tick)
          }
        }
        frameId = requestAnimationFrame(tick)
        cancelFrame = () => { if (frameId !== null) cancelAnimationFrame(frameId) }
      },
      { threshold: 0.5 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { observer.disconnect(); cancelFrame() }
  }, [target, duration])

  return { count, ref }
}
