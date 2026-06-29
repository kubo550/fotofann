# Prompt do Claude Design — Landing page FotoFann

> Wklej sekcję „PROMPT" poniżej do Claude (z włączonym frontend-design). Reszta dokumentu to kontekst i notatki techniczne dla nas.

---

## PROMPT

Zaprojektuj i zbuduj **jednostronicowy landing page (one-pager)** dla firmy **FotoFann — usługi rozrywkowe** (okolice Krzeszowic, woj. małopolskie). Firma wynajmuje atrakcje na wesela, przyjęcia i imprezy dla dzieci. Stack docelowy: **React 19 + Vite + TypeScript** (projekt już zescaffoldowany), więc generuj komponenty w tym stylu; CSS jako CSS Modules lub jeden globalny arkusz — bez dodatkowych bibliotek UI.

### Charakter marki
Jedna spójna marka łącząca **dwa światy**, z ciężarem wizualnym po stronie elegancji:
1. **Elegancja weselna** — odbiorca: przyszłe panny młode / pary przed ślubem. Ton: premium, romantyczny, dostojny.
2. **Zabawa dla dzieci** — odbiorca: mamy z dziećmi. Ton: ciepły, radosny, ale wciąż „klasą wyżej", nie kicz.

Obie grupy mają płynnie przeplatać się na jednej stronie — baza jest elegancka i premium, a element „dziecięcy/zabawowy" wnosi ciepło i radość, nie infantylność. Nie rób z tego kolorowej strony dla dzieci.

### Język wizualny (biało-złoty)
- **Paleta:** baza biel / kość słoniowa / kremowy (#FFFFFF, #FBF8F2, #F3ECE0). Akcent: szampańskie złoto (#C9A24B / #D4B16A), użyte oszczędnie — cienkie linie, podkreślenia, ikony, ramki, ozdobne „wstęgi". Tekst: głęboki grafit / granat (#1F2433). Dużo światła (whitespace), oddech, delikatne cienie.
- **Złote „wstęgi/banderole"** jako motyw przewodni nagłówków sekcji (w PDF marki nagłówki siedzą na ukośnie ściętym złotym pasku — odtwórz ten detal).
- **Typografia:** elegancki szeryfowy display do nagłówków (klimat Cormorant Garamond / Playfair Display), rozstrzelone wersaliki w logo („F O T O F A N N"), opcjonalnie pismo odręczne (script) jako akcent/podpis. Czysty bezszeryfowy do tekstu (Inter / Manrope).
- **Zdjęcia:** ciepłe, jasne, prawdziwe realizacje (pierwszy taniec w ciężkim dymie, serce LED, napis LOVE, dmuchańce dla dzieci). Miękkie zaokrąglenia rogów, polaroidowe/przekrzywione kadry jako subtelny akcent (jak w PDF).
- Animacje delikatne: fade/slide-in przy scrollu, subtelny shimmer na złotych elementach. Bez przesady.
- **W pełni responsywny, mobile-first** — większość ruchu z telefonów.

### Logo / nazwa
„FOTOFANN" wersalikami z podpisem „usługi rozrywkowe", ikona aparatu z serduszkiem w obiektywie. Odtwórz logo czysto typograficznie (placeholder), zostaw miejsce na realny plik.

### Sekcje (kolejność)
1. **Hero** — pełnoekranowe, eleganckie zdjęcie pierwszego tańca w ciężkim dymie w tle (zaciemnione), na wierzchu logo + nagłówek łączący oba światy, np. *„Atrakcje, które robią wrażenie — od pierwszego tańca po dziecięcą zabawę"*. Główny przycisk **„Zarezerwuj termin"** (scroll do sekcji rezerwacji), drugorzędny **„Zobacz ofertę"**. Subtelny złoty akcent.
2. **Dla kogo / dwa światy** — krótka sekcja sygnalizująca, że robimy zarówno eleganckie wesela, jak i imprezy dla dzieci. Dwa wizualne „filary", ale w jednej, spójnej kompozycji.
3. **Oferta / Usługi** — siatka kart, każda: zdjęcie + nazwa + 1–2 zdania opisu (treści niżej w „Treść z oferty"):
   - Fotobudka tradycyjna
   - Fotobudka 360°
   - Usługa ciężkiego dymu
   - Serce LED
   - Napis LOVE
   - Serduszko LED
   - Fontanny iskier
   - **Dmuchańce dla dzieci** (atrakcje dla najmłodszych)
4. **Dlaczego my / Co warto wiedzieć** — wyróżniki: nielimitowana liczba zdjęć i wydruków, zdjęcia w chmurze online, mnóstwo gadżetów, dym hipoalergiczny i bezpieczny (znika bez śladu, parkiet suchy), różne tła (białe, boho, dmuchany namiot LED), personalizacja.
5. **Galeria realizacji** — estetyczna siatka/masonry zdjęć z imprez.
6. **Pakiety i rabaty (BEZ CEN)** — komunikat: *2 usługi = rabat, 3 usługi = większy rabat, ceny do negocjacji*. CTA „Zapytaj o wycenę". **Nie podawaj żadnych kwot.**
7. **Rezerwacja (GŁÓWNY CEL STRONY)** — czytelny, mobilny formularz/kreator rezerwacji:
   - wybór usług (multi-select, można zaznaczyć kilka),
   - **data i godzina** (date + time picker),
   - **miejscowość** (pole tekstowe; dopisek: dojazd > 30 km od Krzeszowic = dodatkowa opłata),
   - imię + telefon/e-mail, opcjonalna wiadomość,
   - przycisk „Wyślij zapytanie / Zarezerwuj".
   Zaprojektuj to jako samodzielny, dopracowany komponent UI (na froncie mock/stub `onSubmit`) — backend (kalendarz) podepniemy później. Ma wyglądać premium i być bardzo łatwy w obsłudze na telefonie.
8. **Kontakt / Stopka** — telefon **503 657 992**, e-mail **fotoofann@gmail.com**, Instagram **@_fotofann__**, Facebook **Fotobudka fotofann**, obszar działania: Krzeszowice i okolice. Hasło zamykające: *„Zapraszamy do rezerwacji"*.

### Treść z oferty (do wykorzystania słowo w słowo / parafraza)
- **Fotobudka tradycyjna** — doskonała zabawa i niezapomniane wspomnienia w formie zdjęć; nielimitowana liczba zdjęć i wydruków, gadżety, zdjęcia w chmurze; trzy ujęcia w formie paska, każde drukowane podwójnie; tła: białe, boho, dmuchany namiot LED.
- **Fotobudka 360°** — nowoczesne ujęcia 360°, filmowe efekty, mnóstwo gadżetów, personalizacja filmiku.
- **Ciężki dym** — unosi się nisko nad parkietem (na wysokości kolan), pierwszy taniec jak z bajki; neutralny zapach, hipoalergiczny, znika bez śladu, parkiet pozostaje suchy.
- **Serce LED / Napis LOVE / Serduszko LED** — podświetlane dekoracje tworzące romantyczną oprawę.
- **Fontanny iskier** — ozdobny stelaż, z którego wydobywają się migoczące iskry; efektowne widowisko (np. przy pierwszym tańcu / torcie).
- **Dmuchańce dla dzieci** — atrakcje dla najmłodszych gości; radosna zabawa dla dzieci podczas przyjęcia.
- Hasło ogólne: *„Każda z naszych propozycji gwarantuje uśmiech na twarzach gości oraz świetną zabawę."*

### Czego unikać
- Generycznej „AI-owej" estetyki landing page (gradientowe fiolety, sztampowe układy).
- Neonowych, krzykliwych kolorów dla dzieci w całej stronie — playfulness wnoś ciepłem i fotografią, nie kolorem tła.
- Jakichkolwiek cen.
- Przeładowania animacjami.

Dostarcz dopracowany, gotowy do osadzenia kod. Zadbaj o spójny system designu (tokeny kolorów, skala typografii, odstępy) i pełną responsywność.

---

## Notatki techniczne (dla nas, nie do promptu)

### System rezerwacji / kalendarz
Frontend to tylko formularz — sercem jest backend kalendarza, dostępny dla admina z telefonu. Opcje:
- **Cal.com** — open source, darmowy plan / self-host, aplikacja mobilna, integracja z Google Calendar, można definiować typy „usług" i strefy. Najlepiej pasuje do wymagań (wybór usługi + data/godzina, admin z telefonu, tanio/za darmo). **Rekomendacja.**
- **Google Calendar API** — własna integracja: formularz → tworzy event w kalendarzu admina. Darmowe, ale więcej kodu i obsługi.
- **Najprostszy MVP** — formularz → e-mail / Google Sheet / Formspree, a rezerwacje admin wpisuje ręcznie. Zero kosztów, najszybsze do uruchomienia na start.

Sugestia: na start **MVP (formularz → e-mail/Sheet)**, potem migracja do Cal.com gdy ruch wzrośnie.

### Zasoby graficzne
- Banner: `tmp/fotofann-banner.jpeg` (LILJOY × FotoFann).
- Zdjęcia realizacji: do wyciągnięcia ze stron PDF `tmp/Fotofann oferta.pdf` (pierwszy taniec w dymie, serce LED, napis LOVE, fotobudki, fontanny iskier, dmuchańce). Wyeksportować i wrzucić do `public/`.
- Uwaga: Claude Design / Artifact nie pobiera zewnętrznych obrazów — w wersji „artifact" użyć placeholderów, realne zdjęcia podpiąć dopiero przy osadzaniu w projekcie React.

### Dane kontaktowe (potwierdzone z PDF)
- Tel: 503 657 992 · E-mail: fotoofann@gmail.com · IG: @_fotofann__ · FB: Fotobudka fotofann
- Baza: Krzeszowice; dojazd > 30 km = dopłata.