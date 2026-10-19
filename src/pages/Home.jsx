import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const offers = [
  ['Shopify Stores', 'Custom Shopify 2.0 themes and sections, built to look premium and convert.'],
  ['Business Websites', 'Fast, modern websites in React or WordPress for studios, brands and services.'],
  ['Redesign & Speed', 'Already have a site? I redesign it and make it load fast on every phone.'],
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="stack" style={{ gap: 22 }}>
            <span className="eyebrow">Web design studio · Delhi NCR</span>
            <h1>Websites that feel <span className="gold">premium</span> and sell.</h1>
            <p className="lead">
              I design and build modern websites and Shopify stores for brands that want to stand out, and I share
              how I build them in weekly tutorials.
            </p>
            <div className="row">
              <Link to="/contact" className="btn btn-gold">Start your project</Link>
              <Link to="/work" className="btn btn-glass">See my work</Link>
            </div>
          </div>
          <div className="glass hero-orb" aria-hidden="true">
            <div className="stack" style={{ alignItems: 'center', gap: 10 }}>
              <div className="diamonds"><i /><i /><i /></div>
              <span className="sbh">SBH</span>
              <span className="eyebrow" style={{ color: 'var(--ink-soft)' }}>Stores by Himanshu</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack">
            <span className="eyebrow">What I do</span>
            <h2>Built for brands, not templates.</h2>
          </div>
          <div className="grid g3">
            {offers.map(([t, d], i) => (
              <div className="glass card stack" key={t}>
                <span className="num">0{i + 1}</span>
                <h3>{t}</h3>
                <p className="muted" style={{ margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="stack">
              <span className="eyebrow">Selected work</span>
              <h2>Recent projects</h2>
            </div>
            <Link to="/work" className="btn btn-glass">All work →</Link>
          </div>
          <div className="grid g2">
            {projects.slice(0, 4).map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="glass card stack" style={{ alignItems: 'center', textAlign: 'center', padding: '56px 28px' }}>
            <span className="eyebrow">Free for developers</span>
            <h2>Shopify Liquid sections & design files</h2>
            <p className="lead">Download the sections and styles I use in my tutorials and drop them into your own projects.</p>
            <Link to="/resources" className="btn btn-gold">Browse resources</Link>
          </div>
        </div>
      </section>
    </>
  )
}
