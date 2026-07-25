import type { CSSProperties } from 'react'
import { SERVICES, PERKS, PACKAGES } from './data'
import { useReveal } from './hooks/useReveal'
import { BrandLockup, Diamond, Ribbon, IconPhone, IconMail, IconIg, IconFb } from './components/icons'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { BookeroWidget } from './components/BookeroWidget'
import { ContactForm } from './components/ContactForm'

function App() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>

      <nav className="nav" aria-label="Nawigacja główna">
        <a href="#top" className="nav__brand" aria-label="FotoFann x LIL JOY, strona główna">
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
        <Hero />

        {/* Three worlds */}
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
          {/* Desktop: seamless banner with labels over the three zones */}
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

          {/* Mobile: three vertical slices with captions */}
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

        {/* Offer */}
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
              <li key={s.key} className="service reveal" style={{ '--i': i } as CSSProperties}>
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

        {/* Why us */}
        <section id="dlaczego" className="section section--sand" aria-labelledby="dlaczego-title">
          <div className="why">
            <div className="why__text reveal">
              <div className="ribbon-wrap">
                <Ribbon>Dlaczego my</Ribbon>
              </div>
              <h2 id="dlaczego-title">Co warto wiedzieć</h2>
              <p className="why__lead">
                Dbamy o każdy detal, by zabawa była bezpieczna, a wspomnienia trafiały od razu w Twoje ręce.
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

        <Gallery />

        {/* Packages */}
        <section id="pakiety" className="section section--cream" aria-labelledby="pakiety-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Pakiety</Ribbon>
            </div>
            <h2 id="pakiety-title">Pakiety i rabaty</h2>
            <p>
              Im więcej atrakcji wybierzesz, tym korzystniej. Ceny ustalamy indywidualnie, jesteśmy
              otwarci na rozmowę.
            </p>
          </div>
          <ul className="packages">
            {PACKAGES.map((p, i) => (
              <li key={p.title} className="pkg reveal" style={{ '--i': i } as CSSProperties}>
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

        {/* Booking */}
        <section id="rezerwacja" className="booking" aria-labelledby="rezerwacja-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Rezerwacja</Ribbon>
            </div>
            <h2 id="rezerwacja-title">Zarezerwuj termin</h2>
            <p>Trzy szybkie kroki, resztą zajmiemy się my.</p>
          </div>

          <ol className="booking-steps reveal">
            <li className="bstep">
              <span className="bstep__num">1</span>
              <div className="bstep__body">
                <h3>Wybierz atrakcje</h3>
                <p>Zaznacz wszystko, co Cię interesuje.</p>
              </div>
            </li>
            <li className="bstep">
              <span className="bstep__num">2</span>
              <div className="bstep__body">
                <h3>Zaznacz termin</h3>
                <p>Data i godzina rozpoczęcia Twojej imprezy.</p>
              </div>
            </li>
            <li className="bstep">
              <span className="bstep__num">3</span>
              <div className="bstep__body">
                <h3>Podaj miejscowość</h3>
                <p>Zostaw kontakt, a resztą zajmiemy się my.</p>
              </div>
            </li>
          </ol>

          <p className="booking-note reveal">
            <span aria-hidden="true">✦</span> Atrakcja niedostępna w Twoim terminie? Nie rezygnuj,{' '}
            <a href="tel:+48504579380">zadzwoń</a> lub <a href="#pytanie">napisz</a>, coś wymyślimy.
          </p>

          <div className="booking__card reveal">
            <BookeroWidget />
          </div>
        </section>

        {/* Question / contact form */}
        <section id="pytanie" className="section section--cream" aria-labelledby="pytanie-title">
          <div className="head reveal">
            <div className="ribbon-wrap">
              <Ribbon>Kontakt</Ribbon>
            </div>
            <h2 id="pytanie-title">Masz pytanie?</h2>
            <p>
              Nie wiesz, co wybrać, albo Twojego terminu nie ma w kalendarzu? Napisz, a odezwiemy się
              najszybciej, jak to możliwe.
            </p>
          </div>
          <div className="booking__card reveal">
            <ContactForm />
          </div>
        </section>
      </main>

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
              <a href="mailto:kontakt.fotofann@gmail.com">
                <span aria-hidden="true">
                  <IconMail />
                </span>{' '}
                kontakt.fotofann@gmail.com
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
    </div>
  )
}

export default App
