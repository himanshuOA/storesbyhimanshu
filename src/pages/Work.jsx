import { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const filters = [
  { key: 'All', label: 'All' },
  { key: 'Website', label: 'Websites & stores' },
  { key: 'App', label: 'App development' },
]

export default function Work() {
  const [type, setType] = useState('All')
  const list = type === 'All' ? projects : projects.filter((p) => p.type === type)
  return (
    <section className="hero">
      <div className="wrap stack" style={{ gap: 40 }}>
        <div className="stack">
          <span className="eyebrow">Portfolio</span>
          <h1>Work</h1>
          <p className="lead">Websites, Shopify stores and Shopify apps I have designed and built for real businesses.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f.key} aria-pressed={type === f.key} onClick={() => setType(f.key)}>{f.label}</button>
          ))}
        </div>
        <div className="grid g2">
          {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  )
}
