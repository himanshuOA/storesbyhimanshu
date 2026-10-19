export default function ProjectCard({ p }) {
  return (
    <a className="glass project" href={p.url} target="_blank" rel="noreferrer">
      <div
        className="project-cover"
        style={{ background: `radial-gradient(120% 100% at 30% 20%, ${p.tint}, #2a1208 75%)` }}
      >
        {p.image ? <img src={p.image} alt={`${p.name} website`} /> : <span>{p.name}</span>}
      </div>
      <div className="project-body stack">
        <span className="eyebrow">{p.category}{p.location ? ` · ${p.location}` : ''}</span>
        <h3>{p.name}</h3>
        <p className="muted" style={{ margin: 0 }}>{p.summary}</p>
        <div className="row">
          {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
        </div>
        <span style={{ color: 'var(--gold)', fontWeight: 500 }}>Visit website →</span>
      </div>
    </a>
  )
}
