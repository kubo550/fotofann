export type Img = { src: string; w: number; h: number }
export type Service = { key: string; name: string; img: Img; desc: string; kids?: boolean }
export type GalleryItem = { src: string; alt: string; w: number; h: number }

export const SERVICES: Service[] = [
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

export const PERKS = [
  { title: 'Zdjęcia w chmurze', text: 'Wszystkie kadry dostępne online, od razu do pobrania.' },
  { title: 'Bezpieczny dym', text: 'Hipoalergiczny, neutralny zapach, znika bez śladu, parkiet suchy.' },
  { title: 'Różne tła', text: 'Eleganckie białe, stylowe boho lub dmuchany namiot LED.' },
  { title: 'Mnóstwo gadżetów', text: 'Skrzynia pełna rekwizytów do najlepszej zabawy.' },
  { title: 'Personalizacja', text: 'Paski, filmiki i dekoracje dopasowane do Twojej imprezy.' },
]

export const PACKAGES = [
  { mark: '2', title: 'Dwie usługi', text: 'Łączysz dwie atrakcje i otrzymujesz rabat na całość zamówienia.' },
  { mark: '3', title: 'Trzy usługi', text: 'Trzy atrakcje w pakiecie to jeszcze większy rabat.' },
  { mark: '✦', title: 'Do negocjacji', text: 'Jesteśmy otwarci na rozmowę i dopasowanie oferty do potrzeb.' },
]

export const GALLERY: GalleryItem[] = [
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
