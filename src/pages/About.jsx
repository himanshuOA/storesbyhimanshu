import { Link } from 'react-router-dom'

const skills = ['Shopify Liquid', 'Shopify 2.0 themes', 'React', 'Vite', 'WordPress', 'JavaScript', 'Node.js', 'Web performance', 'UI design']

export default function About() {
  return (
    <section className="hero">
      <div className="wrap grid g2" style={{ alignItems: 'start' }}>
        <div className="stack" style={{ gap: 20 }}>
          <span className="eyebrow">About</span>
          <h1>Hi, I'm <span className="gold">Himanshu</span>.</h1>
          <p className="lead">
            I'm a web developer who builds Shopify stores and websites for brands every day. StoresByHimanshu is where I
            take on my own clients and share how premium websites are actually made.
          </p>
          <p className="muted">
            Before code, I spent years teaching Maths and Science. That's why my tutorials explain the "why", not just the
            "how". Clear steps, real projects, and designs you can use straight away.
          </p>
          <Link to="/contact" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>Work with me</Link>
        </div>
        <div className="glass card stack" style={{ gap: 22 }}>
          <h3>What I work with</h3>
          <div className="row">{skills.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
          <hr style={{ border: 0, borderTop: '1px solid var(--glass-line)', width: '100%', margin: '6px 0' }} />
          <h3>What you get</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-soft)' }}>
            <li>One person from first call to launch</li>
            <li>Designs made for your brand, not reused templates</li>
            <li>Fast, mobile-first websites</li>
            <li>Help after launch when you need it</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
