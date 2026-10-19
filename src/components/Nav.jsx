import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/work', 'Work'],
  ['/services', 'Services'],
  ['/resources', 'Resources'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className={`nav glass ${open ? 'open' : ''}`} aria-label="Main">
      <Link to="/" className="brand">
        <img src="./logo.png" alt="" />
        <span>StoresByHimanshu</span>
      </Link>
      <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <ul className="nav-links">
        {links.map(([to, label]) => (
          <li key={to}><NavLink to={to} end={to === '/'}>{label}</NavLink></li>
        ))}
      </ul>
    </nav>
  )
}
