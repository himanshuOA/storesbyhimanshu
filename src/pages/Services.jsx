import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'Landing Page',
    for: 'Launches, campaigns and single-product brands',
    items: ['One premium scrolling page', 'Mobile-first design', 'Contact or WhatsApp form', 'Basic SEO setup'],
  },
  {
    name: 'Business Website',
    for: 'Studios, service businesses and personal brands',
    items: ['Up to 6 pages', 'Custom design, no templates', 'Gallery or portfolio section', 'Speed & SEO optimised', 'Domain and hosting setup'],
    featured: true,
  },
  {
    name: 'Shopify Store',
    for: 'D2C brands selling online',
    items: ['Custom Shopify 2.0 theme or sections', 'Product, collection and cart design', 'Payment & shipping setup', 'Speed optimisation', 'Training to manage your store'],
  },
]

const steps = [
  ['Talk', 'We discuss your brand, goals and the look you want.'],
  ['Design', 'You see the design before any code is written.'],
  ['Build', 'I develop it, test it on every device and make it fast.'],
  ['Launch', 'Your site goes live, and I show you how to manage it.'],
]

export default function Services() {
  return (
    <>
      <section className="hero">
        <div className="wrap stack">
          <span className="eyebrow">Services</span>
          <h1>Pick what your brand needs.</h1>
          <p className="lead">Every project is quoted on its scope. Tell me what you need and you will get a clear price and timeline.</p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap grid g3">
          {packages.map((p) => (
            <div
              key={p.name}
              className="glass card stack"
              style={p.featured ? { borderColor: 'var(--gold)', boxShadow: '0 0 0 1px var(--gold), 0 24px 60px rgba(0,0,0,.35)' } : null}
            >
              {p.featured && <span className="tag" style={{ alignSelf: 'flex-start', borderColor: 'var(--gold)', color: 'var(--gold)' }}>Most chosen</span>}
              <h3>{p.name}</h3>
              <p className="muted" style={{ margin: 0 }}>{p.for}</p>
              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-soft)' }}>
                {p.items.map((i) => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}
              </ul>
              <Link to="/contact" className={`btn ${p.featured ? 'btn-gold' : 'btn-glass'}`} style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                Get a quote
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack"><span className="eyebrow">Process</span><h2>How we work together</h2></div>
          <div className="grid g3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))' }}>
            {steps.map(([t, d], i) => (
              <div className="glass card stack" key={t}>
                <span className="num">0{i + 1}</span>
                <h3>{t}</h3>
                <p className="muted" style={{ margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
