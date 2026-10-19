import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Work() {
  return (
    <section className="hero">
      <div className="wrap stack" style={{ gap: 40 }}>
        <div className="stack">
          <span className="eyebrow">Portfolio</span>
          <h1>Work</h1>
          <p className="lead">Websites and stores I have designed and built for real businesses.</p>
        </div>
        <div className="grid g2">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  )
}
