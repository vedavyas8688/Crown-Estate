import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EASE = 'power2.out'

export function useScrollReveal(scopeRef) {
  useEffect(() => {
    if (!scopeRef.current) return

    const ctx = gsap.context(() => {
      // Single-element reveals
      const items = scopeRef.current.querySelectorAll('[data-reveal]')
      items.forEach((el) => {
        const delay = parseFloat(el.dataset.revealDelay || 0)
        const distance = parseFloat(el.dataset.revealDistance ?? 60)

        if (distance === 0) {
          // Opacity only — preserves any CSS rotation on the element.
          gsap.set(el, { opacity: 0 })
          ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () =>
              gsap.to(el, { opacity: 1, duration: 1.0, delay, ease: EASE })
          })
        } else {
          gsap.set(el, { opacity: 0, y: distance })
          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () =>
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                delay,
                ease: EASE
              })
          })
        }
      })

      // Grouped reveals — stagger children
      const groups = scopeRef.current.querySelectorAll('[data-reveal-group]')
      groups.forEach((group) => {
        const children = group.querySelectorAll('[data-reveal-child]')
        if (!children.length) return
        gsap.set(children, { opacity: 0, y: 50 })
        ScrollTrigger.create({
          trigger: group,
          start: 'top 85%',
          once: true,
          onEnter: () =>
            gsap.to(children, {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: EASE,
              stagger: 0.15
            })
        })
      })

      // Hero reveal — fires immediately on mount (no scroll trigger)
      const heroItems = scopeRef.current.querySelectorAll('[data-hero-reveal]')
      if (heroItems.length) {
        gsap.set(heroItems, { opacity: 0, y: 60 })
        gsap.to(heroItems, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: EASE,
          stagger: 0.18,
          delay: 0.15
        })
      }
    }, scopeRef)

    return () => ctx.revert()
  }, [scopeRef])
}

