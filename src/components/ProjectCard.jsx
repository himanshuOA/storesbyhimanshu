import { Link } from 'react-router-dom'

export default function ProjectCard({ p }) {
  const internal = p.url?.startsWith('/')
  const label = p.linkLabel || (p.type === 'App' ? 'See the app →' : 'Visit website →')
  const inner = (
    <>
      <div
        className="project-cover"
        style={{ background: `radial-gradient(120% 100% at 30% 20%, ${p.tint}, #2a1208 75%)` }}
      >
        {p.image ? <img src={p.image} alt={p.name} /> : <span style={{ padding: '0 24px', textAlign: 'center' }}>{p.name}</span>}
      </div>
      <div className="project-body stack">
        <span className="eyebrow">{p.category}{p.location ? ` · ${p.location}` : ''}</span>
        <h3>{p.name}</h3>
        <p className="muted" style={{ margin: 0 }}>{p.summary}</p>
        <div className="row">
          {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
        </div>
        <span style={{ color: 'var(--gold)', fontWeight: 500 }}>{label.includes('→') ? label : `${label} →`}</span>
      </div>
    </>
  )
  return internal
    ? <Link className="glass project" to={p.url}>{inner}</Link>
    : <a className="glass project" href={p.url} target="_blank" rel="noreferrer">{inner}</a>
}
