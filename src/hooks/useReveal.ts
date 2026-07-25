import { useEffect, useRef } from 'react'

// Adds `.is-visible` to descendant `.reveal` elements as they enter the viewport.
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    const vh = window.innerHeight || document.documentElement.clientHeight
    const show = (el: HTMLElement) => el.classList.add('is-visible')

    // Elements already in view (e.g. hero) appear immediately.
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.95) show(el)
    })

    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              show(e.target as HTMLElement)
              io?.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
      )
      els.forEach((el) => {
        if (!el.classList.contains('is-visible')) io?.observe(el)
      })
    } else {
      els.forEach(show)
    }

    // Safety net: never leave content permanently hidden if the observer misfires.
    const safety = window.setTimeout(() => els.forEach(show), 1500)

    return () => {
      io?.disconnect()
      window.clearTimeout(safety)
    }
  }, [])
  return ref
}
