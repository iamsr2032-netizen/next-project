"use client"

import { useEffect, useRef, useState, useCallback } from "react"

// Intersection Observer hook for reveal animations
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(element)
      }
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
      ...options
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

// Magnetic hover effect hook
export function useMagnetic() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * 0.2
      const deltaY = (e.clientY - centerY) * 0.2
      
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return ref
}

// Counter animation hook
export function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)
  const countRef = useRef(start)
  const frameRef = useRef<number>()

  const startCounter = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out-expo)
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)
      const currentCount = Math.floor(start + (end - start) * easeOutExpo)
      
      countRef.current = currentCount
      setCount(currentCount)
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    
    frameRef.current = requestAnimationFrame(animate)
  }, [end, duration, start, isAnimating])

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return { count, startCounter }
}

// Parallax effect hook
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.scrollY
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}

// Smooth scroll to element
export function useSmoothScroll() {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return scrollTo
}

// Staggered animation helper
export function getStaggerDelay(index: number, baseDelay: number = 0.1) {
  return { animationDelay: `${index * baseDelay}s` }
}
