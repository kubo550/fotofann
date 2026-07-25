export function LogoMark({ size = 26 }: { size?: number }) {
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

export function BrandLockup({ markSize = 26 }: { markSize?: number }) {
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

export function Diamond() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 2l3 7-3 13-3-13 3-7z" fill="currentColor" opacity={0.9} />
    </svg>
  )
}

export function IconPhone() {
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

export function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={1.4} />
      <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
    </svg>
  )
}

export function IconIg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.4} />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconFb() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M14.5 8.5h2V5.7h-2.3c-2 0-3.2 1.2-3.2 3.3v1.8H9v2.7h2v6h2.8v-6h2.1l.4-2.7h-2.5V9.4c0-.6.3-.9.7-.9z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  )
}

export function IconChevron({ dir }: { dir: 'left' | 'right' }) {
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

export function Ribbon({ children }: { children: string }) {
  return <span className="ribbon">{children}</span>
}
