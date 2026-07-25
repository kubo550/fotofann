import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const heroImgRef = useRef<HTMLImageElement>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)

  // If the hero is already cached, `load` may fire before React attaches onLoad.
  useEffect(() => {
    if (heroImgRef.current?.complete) setHeroLoaded(true)
  }, [])

  return (
    <header id="top" className="hero" aria-labelledby="hero-title">
      <div className={`hero__media${heroLoaded ? ' is-loaded' : ''}`}>
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet="/img/hero-dance-smoke-tall-576.webp 576w, /img/hero-dance-smoke-tall-768.webp 768w"
            sizes="100vw"
            width={768}
            height={1023}
          />
          <source
            srcSet="/img/hero-dance-smoke-900.webp 900w, /img/hero-dance-smoke-1200.webp 1200w, /img/hero-dance-smoke-1537.webp 1537w"
            sizes="100vw"
            width={1537}
            height={1023}
          />
          <img
            ref={heroImgRef}
            src="/img/hero-dance-smoke-1537.webp"
            alt="Nowożeńcy w pierwszym tańcu w ciężkim dymie, otoczeni gośćmi i konfetti"
            className="hero__bg"
            width={1537}
            height={1023}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setHeroLoaded(true)}
            onError={() => setHeroLoaded(true)}
          />
        </picture>
      </div>
      <div className="hero__overlay" />
      <div className="hero__inner reveal">
        <h1 id="hero-title">
          Atrakcje, które
          <br />
          robią wrażenie
        </h1>
        <p className="hero__lead">
          Tworzymy niezapomniany klimat na weselach, eventach i przyjęciach prywatnych. Sprawdź naszą
          ofertę wynajmu: od romantycznych efektów na pierwszy taniec, przez fotobudki, aż po pełne
          energii dmuchańce dla najmłodszych.
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
  )
}
