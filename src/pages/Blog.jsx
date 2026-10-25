import { Link } from 'react-router-dom'
import { posts } from '../data/posts.js'

export const fmtDate = (d) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Blog() {
  return (
    <section className="hero">
      <div className="wrap stack" style={{ gap: 36 }}>
        <div className="stack">
          <span className="eyebrow">Blog</span>
          <h1>Shopify & web design, explained</h1>
          <p className="lead">Practical guides on store speed, Shopify Liquid and modern website design, written from real projects.</p>
        </div>
        <div className="grid g2">
          {posts.map((p) => (
            <Link to={`/blog/${p.slug}`} className="glass card stack project" key={p.slug} style={{ textDecoration: 'none', overflow: 'hidden' }}>
              {p.image && <img src={p.image} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover', marginLeft: -32, marginRight: -32, marginTop: -32, marginBottom: 12 }} />}
              <div className="row">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <h3>{p.title}</h3>
              <p className="muted" style={{ margin: 0 }}>{p.description}</p>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <span className="muted" style={{ fontSize: 14 }}>{fmtDate(p.date)}</span>
                <span style={{ color: 'var(--gold)', fontWeight: 500 }}>Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
