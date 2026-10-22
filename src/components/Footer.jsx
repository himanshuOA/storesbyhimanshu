import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="glass foot">
          <div className="stack" style={{ maxWidth: 360 }}>
            <div className="diamonds" aria-hidden="true"><i /><i /><i /></div>
            <h3>StoresByHimanshu</h3>
            <p className="muted" style={{ margin: 0 }}>{site.tagline}</p>
          </div>
          <div className="stack">
            <span className="eyebrow">Explore</span>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="stack">
            <span className="eyebrow">Connect</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
        <p className="muted" style={{ textAlign: 'center', fontSize: 14, marginTop: 24 }}>
          © {new Date().getFullYear()} StoresByHimanshu · {site.location}
        </p>
      </div>
    </footer>
  )
}
