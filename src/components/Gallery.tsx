import { useEffect, useState, type CSSProperties } from 'react'
import { GALLERY } from '../data'
import { Ribbon, IconClose, IconChevron } from './icons'

export function Gallery() {
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

  return (
    <>
      <section id="galeria" className="section" aria-labelledby="galeria-title">
        <div className="head reveal">
          <div className="ribbon-wrap">
            <Ribbon>Realizacje</Ribbon>
          </div>
          <h2 id="galeria-title">Galeria realizacji</h2>
          <p>Chwile, które dla Ciebie uwieczniliśmy.</p>
        </div>
        <div className="gallery">
          {GALLERY.map((g, i) => (
            <button
              type="button"
              key={g.src}
              className="gallery__item reveal"
              style={{ '--i': i } as CSSProperties}
              onClick={() => setLightbox(i)}
              aria-label={`Powiększ zdjęcie: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

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
    </>
  )
}
