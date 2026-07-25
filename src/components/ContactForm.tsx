import { useState, type ChangeEvent, type FormEvent } from 'react'

// Web3Forms access key is public (meant for front-end). Sends to the address bound to the key.
const WEB3FORMS_KEY = 'c3e91cd5-eeca-4f6a-a151-7cb24d098cda'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [hp, setHp] = useState('')
  const [f, setF] = useState({ name: '', contact: '', message: '' })
  const on =
    (k: keyof typeof f) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF((s) => ({ ...s, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (hp) {
      setStatus('ok')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Pytanie ze strony FotoFann',
          from_name: 'Formularz kontaktowy FotoFann',
          Imię: f.name || '(nie podano)',
          Kontakt: f.contact,
          Wiadomość: f.message || '(brak)',
        }),
      })
      const data = await res.json()
      setStatus(data.success === true || data.success === 'true' ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="thanks" role="status" aria-live="polite">
        <h3>Dziękujemy!</h3>
        <p>Wiadomość została wysłana. Odezwiemy się najszybciej, jak to możliwe.</p>
        <p className="thanks__script">Do usłyszenia!</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
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
      <div className="field-row">
        <div>
          <label className="label" htmlFor="c-name">
            Imię
          </label>
          <input id="c-name" className="input" type="text" autoComplete="name" required value={f.name} onChange={on('name')} placeholder="Twoje imię" />
        </div>
        <div>
          <label className="label" htmlFor="c-contact">
            Telefon lub e-mail
          </label>
          <input id="c-contact" className="input" type="text" inputMode="tel" required value={f.contact} onChange={on('contact')} placeholder="504 579 380 / mail@…" />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="c-message">
          Wiadomość
        </label>
        <textarea id="c-message" className="textarea" rows={4} value={f.message} onChange={on('message')} placeholder="W czym możemy pomóc? Termin, atrakcje, pytania…" />
      </div>
      <button type="submit" className="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wysyłanie…' : 'Wyślij wiadomość'}
      </button>
      {status === 'error' && (
        <p className="form-error" role="alert">
          Coś poszło nie tak przy wysyłce. Zadzwoń: <a href="tel:+48504579380">504 579 380</a> lub spróbuj ponownie.
        </p>
      )}
    </form>
  )
}
