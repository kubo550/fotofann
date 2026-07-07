import { useEffect, useRef, useState } from 'react'

/* ---------- Icons ---------- */
function LogoMark({ size = 26 }: { size?: number }) {
  const sw = size > 30 ? 1.2 : 1.4
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="6.5" width="19" height="13.5" rx="2.5" stroke="currentColor" strokeWidth={sw} />
      <path d="M8.5 6.5l1.3-2.3h4.4l1.3 2.3" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
      <path
        d="M12 17c-2-1.3-3.3-2.5-3.3-4 0-1 .8-1.8 1.8-1.8.7 0 1.2.4 1.5.9.3-.5.8-.9 1.5-.9 1 0 1.8.8 1.8 1.8 0 1.5-1.3 2.7-3.3 4z"
        fill="currentColor"
      />
    </svg>
  )
}

function BrandLockup({ markSize = 26 }: { markSize?: number }) {
  return (
    <span className="brand">
      <span className="brand-mark">
        <LogoMark size={markSize} />
      </span>
      <span className="brand-text">
        <span className="brand-name">FOTOFANN</span>
        <span className="brand-x">×</span>
        <span className="brand-liljoy">LIL JOY</span>
      </span>
    </span>
  )
}

function Diamond() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 2l3 7-3 13-3-13 3-7z" fill="currentColor" opacity={0.9} />
    </svg>
  )
}

function CheckMark() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10.4" stroke="currentColor" strokeWidth={1.1} opacity={0.35} />
      <path d="M7.5 12.4l3 3 6-6.4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InfoDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.4} />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M5 3h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 013 5.2 2 2 0 015 3z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={1.4} />
      <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
    </svg>
  )
}

function IconIg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

function IconFb() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M14.5 8.5h2V5.7h-2.3c-2 0-3.2 1.2-3.2 3.3v1.8H9v2.7h2v6h2.8v-6h2.1l.4-2.7h-2.5V9.4c0-.6.3-.9.7-.9z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  )
}

function IconChevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Ribbon({ children }: { children: string }) {
  return <span className="ribbon">{children}</span>
}

/* ---------- Data ---------- */
type Img = { src: string; w: number; h: number }
type Service = { key: string; name: string; img: Img; desc: string; kids?: boolean }

const SERVICES: Service[] = [
  {
    key: 'fotobudka',
    name: 'Fotobudka tradycyjna',
    img: { src: '/img/fotobudka-trad.webp', w: 674, h: 900 },
    desc: 'Doskonała zabawa i niezapomniane wspomnienia w formie zdjęć. Mnóstwo gadżetów i zdjęcia w chmurze.',
  },
  {
    key: '360',
    name: 'Fotobudka 360°',
    img: { src: '/img/fotobudka-360.webp', w: 674, h: 900 },
    desc: 'Nowoczesne, filmowe ujęcia z każdej perspektywy. Mnóstwo gadżetów i pełna personalizacja filmiku.',
  },
  {
    key: 'dym',
    name: 'Ciężki dym (suchy lód)',
    img: { src: '/img/dance-smoke.webp', w: 780, h: 900 },
    desc: 'Unosi się nisko nad parkietem, by pierwszy taniec wyglądał jak z bajki. Wytwornica oparta na suchym lodzie.',
  },
  {
    key: 'serce',
    name: 'Serce LED',
    img: { src: '/img/serce-led.webp', w: 825, h: 1100 },
    desc: 'Duże, podświetlane serce tworzące romantyczną oprawę najważniejszego wieczoru.',
  },
  {
    key: 'love',
    name: 'Napis LOVE',
    img: { src: '/img/love-garden.webp', w: 999, h: 749 },
    desc: 'Efektowny, drewniany, podświetlany napis LOVE. Klasyka, która zdobi każdy romantyczny kadr.',
  },
  {
    key: 'iskry',
    name: 'Fontanny iskier',
    img: { src: '/img/fontanny.webp', w: 1200, h: 800 },
    desc: 'Ozdobny stelaż, z którego wydobywają się migoczące iskry. Efektowne widowisko przy pierwszym tańcu czy torcie.',
  },
  {
    key: 'dmuchaniec-slonik',
    name: 'Dmuchaniec Słonik',
    img: { src: '/img/dmuchance-slonik.webp', w: 1200, h: 900 },
    desc: 'Kolorowa zjeżdżalnia w motywie safari. Wymiary 7 × 4 m, wysokość 5,5 m. Radosna zabawa dla najmłodszych.',
    kids: true,
  },
  {
    key: 'dmuchaniec-panda',
    name: 'Dmuchaniec Panda',
    img: { src: '/img/dmuchance-panda.webp', w: 1200, h: 900 },
    desc: 'Zjeżdżalnia w motywie pandy i bambusa, nasza nowość. Wymiary 8 × 4,75 m, wysokość 6,6 m.',
    kids: true,
  },
]

const PERKS = [
  { title: 'Zdjęcia w chmurze', text: 'Wszystkie kadry dostępne online, od razu do pobrania.' },
  { title: 'Bezpieczny dym', text: 'Hipoalergiczny, neutralny zapach, znika bez śladu, parkiet suchy.' },
  { title: 'Różne tła', text: 'Eleganckie białe, stylowe boho lub dmuchany namiot LED.' },
  { title: 'Mnóstwo gadżetów', text: 'Skrzynia pełna rekwizytów do najlepszej zabawy.' },
  { title: 'Personalizacja', text: 'Paski, filmiki i dekoracje dopasowane do Waszej imprezy.' },
]

const PACKAGES = [
  { mark: '2', title: 'Dwie usługi', text: 'Łączysz dwie atrakcje i otrzymujesz rabat na całość zamówienia.' },
  { mark: '3', title: 'Trzy usługi', text: 'Trzy atrakcje w pakiecie to jeszcze większy rabat.' },
  { mark: '✦', title: 'Do negocjacji', text: 'Jesteśmy otwarci na rozmowę i dopasowanie oferty do potrzeb.' },
]

const GALLERY: { src: string; alt: string; w: number; h: number }[] = [
  { src: '/img/dym-wide.webp', alt: 'Para w pierwszym tańcu w ciężkim dymie', w: 1200, h: 899 },
  { src: '/img/love-floor.webp', alt: 'Podświetlany napis LOVE na sali weselnej', w: 674, h: 900 },
  { src: '/img/serce-led.webp', alt: 'Duże podświetlane serce LED', w: 825, h: 1100 },
  { src: '/img/gadgets.webp', alt: 'Kolorowe gadżety i rekwizyty do fotobudki', w: 674, h: 900 },
  { src: '/img/venue.webp', alt: 'Elegancka sala weselna z dekoracjami', w: 1200, h: 800 },
  { src: '/img/fontanny.webp', alt: 'Fontanny zimnych iskier przy torcie weselnym', w: 1200, h: 800 },
  { src: '/img/love-garden.webp', alt: 'Podświetlany napis LOVE w plenerze', w: 999, h: 749 },
  { src: '/img/dmuchance-liljoy.webp', alt: 'Duże dmuchane zjeżdżalnie w motywie safari i pandy', w: 1200, h: 900 },
  { src: '/img/dmuchance-dzieci.webp', alt: 'Dzieci bawiące się na dmuchanej zjeżdżalni safari', w: 900, h: 1195 },
]

/* Godziny do wyboru w rezerwacji (co 30 minut, 09:00–23:30). */
const TIMES = Array.from({ length: 30 }, (_, i) => {
  const total = 9 * 60 + i * 30
  const h = Math.floor(total / 60)
  const m = total % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
})

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    const vh = window.innerHeight || document.documentElement.clientHeight
    const show = (el: HTMLElement) => el.classList.add('is-visible')

    // Already-visible elements (e.g. hero) appear immediately.
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

    // Safety net: never leave content permanently hidden if IO misfires.
    const safety = window.setTimeout(() => els.forEach(show), 1500)

    return () => {
      io?.disconnect()
      window.clearTimeout(safety)
    }
  }, [])
  return ref
}

/* ---------- App ---------- */
// Wysyłka formularza przez Web3Forms. Access key jest publiczny (przeznaczony do kodu front-endu).
// Można nadpisać przez VITE_WEB3FORMS_KEY (np. inny klucz na produkcji).
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ||
  'c3e91cd5-eeca-4f6a-a151-7cb24d098cda'

type Form = {
  date: string
  time: string
  place: string
  name: string
  contact: string
  message: string
}

type Status = 'idle' | 'sending' | 'ok' | 'error'

function App() {
  const containerRef = useReveal()
  const [selected, setSelected] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const [hp, setHp] = useState('')
  const [form, setForm] = useState<Form>({
    date: '',
    time: '',
    place: '',
    name: '',
    contact: '',
    message: '',
  })

  // Lightbox galerii: indeks otwartego zdjęcia (null = zamknięty).
  const [lightbox, setLightbox] = useState<number | null>(null)
  const navLb = (d: number) =>
    setLightbox((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length))

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      else if (e.key === 'ArrowRight') navLb(1)
      else if (e.key === 'ArrowLeft') navLb(-1)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox])

  const field =
    (name: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value
      setForm((s) => ({ ...s, [name]: value }))
    }

  const toggle = (key: string) =>
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hp) {
      // Honeypot wypełniony = bot. Udajemy sukces i nic nie wysyłamy.
      setStatus('ok')
      return
    }
    setStatus('sending')
    const services =
      SERVICES.filter((s) => selected.includes(s.key))
        .map((s) => s.name)
        .join(', ') || '(nie wybrano)'
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Nowe zapytanie o rezerwację — FotoFann',
          from_name: 'Formularz FotoFann',
          Atrakcje: services,
          Data: form.date || '(nie podano)',
          Godzina: form.time || '(nie podano)',
          Miejscowość: form.place || '(nie podano)',
          Imię: form.name || '(nie podano)',
          Kontakt: form.contact,
          Wiadomość: form.message || '(brak)',
        }),
      })
      const data = await res.json()
      setStatus(data.success === true || data.success === 'true' ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>

      {/* NAV */}
      <nav className="nav" aria-label="Nawigacja główna">
        <a href="#top" className="nav__brand" aria-label="FotoFann x LIL JOY — strona główna">
          <BrandLockup markSize={26} />
        </a>
        <div className="nav__links">
          <a href="#oferta" className="navlink">
            Oferta
          </a>
          <a href="#dlaczego" className="navlink">
            Dlaczego my
          </a>
          <a href="#galeria" className="navlink">
            Galeria
          </a>
          <a href="#rezerwacja" className="btn-nav">
            Zarezerwuj
          </a>
        </div>
      </nav>

      <main id="main">
        {/* HERO */}
        <header id="top" className="hero" aria-labelledby="hero-title">
          <img
            src="/img/hero-dance-smoke.webp"
            alt="Nowożeńcy w pierwszym tańcu otoczeni ciężkim dymem i konfetti"
            className="hero__bg"
            width={1400}
            height={962}
            fetchPriority="high"
          />
          <div className="hero__overlay" />
          <div className="hero__inner reveal">
            <h1 id="hero-title">
              Atrakcje, które
              <br />
              robią wrażenie
            </h1>
            <p className="hero__lead">
              Tworzymy niezapomniany klimat na weselach, eventach i przyjęciach prywatnych. Sprawdź
              naszą ofertę wynajmu: od romantycznych efektów na pierwszy taniec, przez fotobudki, aż
              po pełne energii dmuchańce dla najmłodszych.
            </p>
            <div className="hero__cta">
              <a href="#rezerwacja" className="btn btn--gold">
                Zarezerwuj termin
              </a>
              <a href="#oferta" className="btn btn--ghost">
                Zobacz ofertę
              </a>
            </div>
          </div>
          <div className="hero__scroll">
            <span className="hero__loc">Krzeszowice · Kraków · Chrzanów · Trzebinia · Olkusz</span>
            <a href="#oferta" className="hero__scroll-cue" aria-label="Przewiń w dół, do oferty">
              <span>przewiń</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </header>

        {/* TWO WORLDS */}
        <section className="section section--cream" aria-labelledby="worlds-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Dla kogo</Ribbon>
            </div>
            <h2 id="worlds-title">Trzy światy, jedna klasa</h2>
            <p>
              Tworzymy dostojną oprawę najważniejszych chwil i wnosimy radość, gdy bawią się najmłodsi.
              Niezależnie od okazji, dbamy o ten sam, dopracowany detal.
            </p>
          </div>
          {/* Desktop: bezszwowy baner z napisami na trzech strefach */}
          <div
            className="worlds-pano reveal"
            role="img"
            aria-label="Trzy światy FotoFann: dmuchańce dla dzieci, pierwszy taniec w ciężkim dymie oraz impreza z fotobudką 360 stopni"
          >
            <img src="/img/worlds-banner.webp" alt="" width={1600} height={679} loading="lazy" />
            <div className="worlds-pano__labels" aria-hidden="true">
              <div className="wlabel">
                <span className="world__script">Radość dla dzieci</span>
                <h3>Dla najmłodszych</h3>
              </div>
              <div className="wlabel">
                <span className="world__script">Elegancja weselna</span>
                <h3>Dla Pary Młodej</h3>
              </div>
              <div className="wlabel">
                <span className="world__script">Każda okazja</span>
                <h3>Imprezy okolicznościowe</h3>
              </div>
            </div>
          </div>

          {/* Mobile: trzy wycinki w pionie, z opisami */}
          <div className="worlds-stack reveal">
            <article className="world">
              <img src="/img/worlds-wedding.webp" alt="Pierwszy taniec Pary Młodej w ciężkim dymie" width={700} height={894} loading="lazy" />
              <div className="world__grad" />
              <div className="world__body">
                <span className="world__script">Elegancja weselna</span>
                <h3>Dla Pary Młodej</h3>
                <p>Fotobudki, ciężki dym, podświetlane dekoracje i fontanny iskier. Premium atmosfera wieczoru.</p>
              </div>
            </article>
            <article className="world">
              <img src="/img/worlds-kids.webp" alt="Dzieci bawiące się przy dmuchanej zjeżdżalni" width={700} height={894} loading="lazy" />
              <div className="world__grad" />
              <div className="world__body">
                <span className="world__script">Radość dla dzieci</span>
                <h3>Dla najmłodszych</h3>
                <p>Dmuchańce, fotobudka i mnóstwo gadżetów. Uśmiech najmłodszych gości.</p>
              </div>
            </article>
            <article className="world">
              <img src="/img/worlds-party.webp" alt="Impreza z fotobudką 360 stopni wieczorem" width={700} height={892} loading="lazy" />
              <div className="world__grad" />
              <div className="world__body">
                <span className="world__script">Każda okazja</span>
                <h3>Imprezy okolicznościowe</h3>
                <p>Osiemnastki, komunie, wesela, studniówki i inne przyjęcia.</p>
              </div>
            </article>
          </div>
        </section>

        {/* OFFER */}
        <section id="oferta" className="section" aria-labelledby="oferta-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Oferta</Ribbon>
            </div>
            <h2 id="oferta-title">Jakie usługi oferujemy</h2>
            <p>Każda z naszych propozycji gwarantuje uśmiech na twarzach gości oraz świetną zabawę.</p>
          </div>
          <ul className="offer-grid">
            {SERVICES.map((s, i) => (
              <li key={s.key} className="service reveal" style={{ '--i': i } as React.CSSProperties}>
                <div className="service__media">
                  <img src={s.img.src} alt={s.name} width={s.img.w} height={s.img.h} loading="lazy" />
                  {s.kids && <span className="badge">dla dzieci</span>}
                </div>
                <div className="service__body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* WHY US */}
        <section id="dlaczego" className="section section--sand" aria-labelledby="dlaczego-title">
          <div className="why">
            <div className="why__text reveal">
              <div className="ribbon-wrap">
                <Ribbon>Dlaczego my</Ribbon>
              </div>
              <h2 id="dlaczego-title">Co warto wiedzieć</h2>
              <p className="why__lead">
                Dbamy o każdy detal, by zabawa była bezpieczna, a wspomnienia trafiały od razu w Wasze ręce.
              </p>
              <ul className="perks">
                {PERKS.map((p) => (
                  <li key={p.title} className="perk">
                    <span className="perk__icon" aria-hidden="true">
                      <Diamond />
                    </span>
                    <div>
                      <div className="perk__title">{p.title}</div>
                      <div className="perk__text">{p.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="why__media reveal">
              <img
                className="photo-a"
                src="/img/photostrips.webp"
                alt="Rekwizyty i gadżety do zdjęć w fotobudce"
                width={674}
                height={900}
                loading="lazy"
              />
              <img
                className="photo-b"
                src="/img/led-frame.webp"
                alt="Fotobudka z podświetlaną ramą LED"
                width={675}
                height={900}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeria" className="section" aria-labelledby="galeria-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Realizacje</Ribbon>
            </div>
            <h2 id="galeria-title">Galeria realizacji</h2>
            <p>Chwile, które dla Was uwieczniliśmy.</p>
          </div>
          <div className="gallery">
            {GALLERY.map((g, i) => (
              <button
                type="button"
                key={g.src}
                className="gallery__item reveal"
                style={{ '--i': i } as React.CSSProperties}
                onClick={() => setLightbox(i)}
                aria-label={`Powiększ zdjęcie: ${g.alt}`}
              >
                <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section id="pakiety" className="section section--cream" aria-labelledby="pakiety-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Pakiety</Ribbon>
            </div>
            <h2 id="pakiety-title">Pakiety i rabaty</h2>
            <p>
              Im więcej atrakcji wybierzecie, tym korzystniej. Ceny ustalamy indywidualnie, jesteśmy
              otwarci na rozmowę.
            </p>
          </div>
          <ul className="packages">
            {PACKAGES.map((p, i) => (
              <li key={p.title} className="pkg reveal" style={{ '--i': i } as React.CSSProperties}>
                <div className="pkg__mark" aria-hidden="true">
                  {p.mark}
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <div className="packages-cta reveal">
            <a href="#rezerwacja" className="btn btn--gold">
              Zapytaj o wycenę
            </a>
          </div>
        </section>

        {/* BOOKING */}
        <section id="rezerwacja" className="booking" aria-labelledby="rezerwacja-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Rezerwacja</Ribbon>
            </div>
            <h2 id="rezerwacja-title">Zarezerwuj termin</h2>
            <p>
              Zaznacz interesujące Was atrakcje i wybierz datę, a odezwiemy się z wyceną i potwierdzeniem.
            </p>
          </div>

          <div className="booking__card reveal">
            {status === 'ok' ? (
              <div className="thanks" role="status" aria-live="polite">
                <div className="thanks__icon" aria-hidden="true">
                  <CheckMark />
                </div>
                <h3>Dziękujemy!</h3>
                <p>Zapytanie zostało wysłane. Skontaktujemy się z Wami najszybciej, jak to możliwe.</p>
                <p className="thanks__script">Do usłyszenia!</p>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="website"
                  className="hp-field"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                />
                <fieldset className="chips-field">
                  <legend className="label label--chips">Wybierz atrakcje</legend>
                  <div className="chips">
                    {SERVICES.map((s) => (
                      <button
                        type="button"
                        key={s.key}
                        onClick={() => toggle(s.key)}
                        className={selected.includes(s.key) ? 'chip is-active' : 'chip'}
                        aria-pressed={selected.includes(s.key)}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="field-row">
                  <div>
                    <label className="label" htmlFor="f-date">
                      Data
                    </label>
                    <input id="f-date" className="input" type="date" value={form.date} onChange={field('date')} />
                  </div>
                  <div>
                    <label className="label" htmlFor="f-time">
                      Godzina
                    </label>
                    <div className="select-wrap">
                      <select id="f-time" className="input select" value={form.time} onChange={field('time')}>
                        <option value="">Wybierz godzinę</option>
                        {TIMES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="f-place">
                    Miejscowość
                  </label>
                  <input
                    id="f-place"
                    className="input"
                    type="text"
                    value={form.place}
                    onChange={field('place')}
                    placeholder="np. Krzeszowice, sala weselna…"
                    aria-describedby="place-hint"
                  />
                  <p className="hint" id="place-hint">
                    <span aria-hidden="true">
                      <InfoDot />
                    </span>
                    Dojazd ponad 20 km od Krzeszowic, doliczamy dodatkową opłatę.
                  </p>
                </div>

                <div className="field-row">
                  <div>
                    <label className="label" htmlFor="f-name">
                      Imię
                    </label>
                    <input
                      id="f-name"
                      className="input"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={field('name')}
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="f-contact">
                      Telefon lub e-mail
                    </label>
                    <input
                      id="f-contact"
                      className="input"
                      type="text"
                      inputMode="tel"
                      required
                      value={form.contact}
                      onChange={field('contact')}
                      placeholder="504 579 380 / mail@…"
                    />
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="f-message">
                    Wiadomość <span className="opt">(opcjonalnie)</span>
                  </label>
                  <textarea
                    id="f-message"
                    className="textarea"
                    rows={3}
                    value={form.message}
                    onChange={field('message')}
                    placeholder="Liczba gości, rodzaj przyjęcia, pytania…"
                  />
                </div>

                <button type="submit" className="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
                </button>
                {status === 'error' && (
                  <p className="form-error" role="alert">
                    Coś poszło nie tak przy wysyłce. Zadzwoń:{' '}
                    <a href="tel:+48504579380">504 579 380</a> lub spróbuj ponownie.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="kontakt" className="footer">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="brand-row">
              <BrandLockup markSize={30} />
            </div>
            <p>
              Atrakcje i dekoracje na wesela, przyjęcia oraz imprezy dla dzieci. Krzeszowice, Kraków,
              Chrzanów, Trzebinia, Olkusz i okolice, woj. małopolskie.
            </p>
          </div>
          <div>
            <h2 className="footer__heading">Kontakt</h2>
            <div className="footer__links">
              <a href="tel:+48504579380" aria-label="Zadzwoń do Mateusza: 504 579 380">
                <span aria-hidden="true">
                  <IconPhone />
                </span>{' '}
                Mateusz · 504 579 380
              </a>
              <a href="tel:+48507843103" aria-label="Zadzwoń do Wiktora: 507 843 103">
                <span aria-hidden="true">
                  <IconPhone />
                </span>{' '}
                Wiktor · 507 843 103
              </a>
              <a href="mailto:fotoofann@gmail.com">
                <span aria-hidden="true">
                  <IconMail />
                </span>{' '}
                fotoofann@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h2 className="footer__heading">Social media</h2>
            <div className="footer__links">
              <a
                href="https://instagram.com/_fotofann__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FotoFann na Instagramie"
              >
                <span aria-hidden="true">
                  <IconIg />
                </span>{' '}
                @_fotofann__
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100078145622944"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FotoFann na Facebooku"
              >
                <span aria-hidden="true">
                  <IconFb />
                </span>{' '}
                Fotobudka fotofann
              </a>
              <a
                href="https://www.facebook.com/lil.joy.dmuchance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LIL-JOY Dmuchańce na Facebooku"
              >
                <span aria-hidden="true">
                  <IconFb />
                </span>{' '}
                LIL-JOY Dmuchańce
              </a>
            </div>
          </div>
        </div>
        <div className="footer__close">
          <p className="footer__close-script">Zapraszamy do rezerwacji</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} FotoFann · usługi rozrywkowe · Krzeszowice
          </p>
          <p className="footer__credit">
            made by{' '}
            <a href="https://jakubkurdziel.pl/" target="_blank" rel="noopener noreferrer">
              jk.dev
            </a>
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Zamknij"
            autoFocus
          >
            <IconClose />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              navLb(-1)
            }}
            aria-label="Poprzednie zdjęcie"
          >
            <IconChevron dir="left" />
          </button>
          <img
            className="lightbox__img"
            src={GALLERY[lightbox].src}
            alt={GALLERY[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              navLb(1)
            }}
            aria-label="Następne zdjęcie"
          >
            <IconChevron dir="right" />
          </button>
          <p className="lightbox__caption">{GALLERY[lightbox].alt}</p>
        </div>
      )}
    </div>
  )
}

export default App
