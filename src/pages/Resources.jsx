import { useState } from 'react'
import { resources, resourceTypes } from '../data/resources.js'
import { site } from '../data/site.js'

const labels = { liquid: 'Shopify Liquid', design: 'Design file', code: 'Code' }

export default function Resources() {
  const [type, setType] = useState('all')
  const list = type === 'all' ? resources : resources.filter((r) => r.type === type)

  return (
    <section className="hero">
      <div className="wrap stack" style={{ gap: 36 }}>
        <div className="stack">
          <span className="eyebrow">Resources</span>
          <h1>Liquid sections & design files</h1>
          <p className="lead">The files from my tutorials. Download them, use them in your projects, and build faster.</p>
        </div>

        <div className="filters" role="group" aria-label="Filter resources">
          {resourceTypes.map((t) => (
            <button key={t.key} aria-pressed={type === t.key} onClick={() => setType(t.key)}>{t.label}</button>
          ))}
        </div>

        {list.length === 0 ? (
          <div className="glass card"><p className="muted" style={{ margin: 0 }}>New files in this category are coming soon.</p></div>
        ) : (
          <div className="grid g3">
            {list.map((r) => (
              <article className="glass card stack" key={r.id}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <span className="eyebrow">{labels[r.type]}</span>
                  <span className="tag" style={r.price ? null : { borderColor: 'var(--gold)', color: 'var(--gold)' }}>
                    {r.price ? `₹${r.price}` : 'Free'}
                  </span>
                </div>
                <h3>{r.title}</h3>
                <p className="muted" style={{ margin: 0 }}>{r.description}</p>
                <div className="row">{r.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                {r.price ? (
                  <a className="btn btn-gold" style={{ alignSelf: 'flex-start' }} href={`mailto:${site.email}?subject=${encodeURIComponent('Buy: ' + r.title)}`}>
                    Buy this file
                  </a>
                ) : (
                  <a className="btn btn-glass" style={{ alignSelf: 'flex-start' }} href={r.file} download>
                    Download
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
