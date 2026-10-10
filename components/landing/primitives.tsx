import type { ReactNode } from 'react'

export const NAV_ITEMS = [
  { label: 'инвестиции', href: '#investors' },
  { label: 'заёмщики', href: '#business' },
  { label: 'о компании', href: '#how' },
  { label: 'контакты', href: '#contacts' },
]

export function ArrowIcon() {
  return (
    <svg className="btn__icon" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type GlassButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  withArrow?: boolean
}

export function GlassButton({ href, children, variant = 'primary', size = 'md', withArrow = true }: GlassButtonProps) {
  const classes = ['btn', size === 'md' ? `btn--${variant}` : `btn--${size}`].join(' ')
  return (
    <a href={href} className={classes}>
      <span>{children}</span>
      {withArrow && <ArrowIcon />}
    </a>
  )
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className={small ? 'logo logo--sm' : 'logo'} aria-label="ЭЙВА ПЛАТИНУМ — на главную">
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__mark-italic">Э</span>ЙВА
      </span>
      <span className="logo__sub" aria-hidden="true">
        ПЛАТИНУМ
      </span>
    </a>
  )
}

export function Nav({ label, capitalize = false }: { label: string; capitalize?: boolean }) {
  return (
    <nav aria-label={label}>
      <ul className="nav" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav__link">
              {capitalize ? item.label.charAt(0).toUpperCase() + item.label.slice(1) : item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
