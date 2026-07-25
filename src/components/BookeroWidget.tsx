import { useEffect, useRef } from 'react'

// Bookero reservation system (plugin v2). Account id from the Bookero panel.
const BOOKERO_ID = '7FxNrmwImX6n'
const BOOKERO_SRC = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js'

export function BookeroWidget() {
  // React owns only the empty wrapper; the #bookero node is created imperatively inside it
  // so Bookero can manipulate it freely and React re-renders (e.g. lightbox) never touch it.
  const hostRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    if (!host.querySelector('#bookero')) {
      const target = document.createElement('div')
      target.id = 'bookero'
      host.appendChild(target)
      // Global config read by the Bookero script.
      ;(window as unknown as { bookero_config?: Record<string, unknown> }).bookero_config = {
        id: BOOKERO_ID,
        container: 'bookero',
        type: 'full',
        position: '',
        plugin_css: true,
        lang: 'pl',
      }
      // Inject the script only once (safe against double mount in React StrictMode).
      if (!document.querySelector(`script[src="${BOOKERO_SRC}"]`)) {
        const s = document.createElement('script')
        s.src = BOOKERO_SRC
        s.async = true
        document.body.appendChild(s)
      }
    }
    // Bookero shows ~9 hours per day and hides the rest behind an empty "more" toggle.
    // 1) Auto-expand every column (clicking works on the hidden element too) so all hours show at once.
    // 2) Scroll each column once to 16:00 so evening slots are visible by default.
    // Column height + scroll are handled in CSS.
    const tune = () => {
      host.querySelectorAll<HTMLElement>('.week-days-hour-more').forEach((el) => el.click())
      host.querySelectorAll<HTMLElement>('.week-days-hours').forEach((list) => {
        if (list.dataset.evening === '1') return
        const hours = Array.from(list.querySelectorAll<HTMLElement>('.week-days-hour'))
        const target = hours.find((h) => (h.textContent || '').trim().startsWith('16:00'))
        const first = hours[0]
        if (target && first) {
          // offsetTop is layout-independent (no overshoot on cart re-render); leave one row above 16:00.
          const offset = target.offsetHeight + 6
          list.scrollTop = Math.max(0, target.offsetTop - first.offsetTop - offset)
          list.dataset.evening = '1'
        }
      })
      // Replace the native service <select> with clickable chips (once per select instance).
      const sel = host.querySelector<HTMLSelectElement>('#bookero-plugin-service')
      if (sel && sel.dataset.chipped !== '1') {
        sel.dataset.chipped = '1'
        sel.style.display = 'none'
        const wrap = document.createElement('div')
        wrap.className = 'svc-chips'
        const render = () => {
          wrap.innerHTML = ''
          Array.from(sel.options).forEach((opt) => {
            if (!opt.value) return
            const chip = document.createElement('button')
            chip.type = 'button'
            chip.className = 'svc-chip' + (opt.value === sel.value ? ' is-active' : '')
            chip.textContent = opt.textContent
            chip.addEventListener('click', () => {
              sel.value = opt.value
              sel.dispatchEvent(new Event('change', { bubbles: true }))
              sel.dispatchEvent(new Event('input', { bubbles: true }))
              render()
            })
            wrap.appendChild(chip)
          })
        }
        render()
        sel.addEventListener('change', render)
        sel.insertAdjacentElement('afterend', wrap)
        // Cart hint (multiselect is not native in Bookero — services are added one at a time).
        const hint = document.createElement('p')
        hint.className = 'svc-hint'
        hint.textContent =
          'Chcesz kilka atrakcji? Wybierz jedną, ustaw termin i kliknij „Dodaj do koszyka”, a potem dodaj kolejną.'
        wrap.insertAdjacentElement('afterend', hint)
      }
    }
    const mo = new MutationObserver(tune)
    mo.observe(host, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [])
  return <div ref={hostRef} />
}
