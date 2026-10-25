import { Link, useParams } from 'react-router-dom'
import { posts, fmtDate } from '../data/posts.js'

function Block({ b }) {
  if (b.h) return <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 38px)', marginTop: 18 }}>{b.h}</h2>
  if (b.p) return <p>{b.p}</p>
  if (b.ul) return <ul>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>
  if (b.ol) return <ol>{b.ol.map((x) => <li key={x}>{x}</li>)}</ol>
  if (b.code) return <pre className="glass" style={{ padding: 18, borderRadius: 16, overflowX: 'auto', fontSize: 14 }}><code>{b.code}</code></pre>
  if (b.tip) return <p className="glass" style={{ padding: '14px 20px', borderRadius: 16, borderColor: 'var(--gold)', color: 'var(--ink)' }}>{b.tip}</p>
  return null
}

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="hero"><div className="wrap stack">
        <h1>Post not found</h1>
        <Link to="/blog" className="btn btn-glass" style={{ alignSelf: 'flex-start' }}>← All posts</Link>
      </div></section>
    )
  }

  return (
    <article className="hero">
      <div className="wrap" style={{ maxWidth: 780 }}>
        <div className="stack" style={{ gap: 18, marginBottom: 36 }}>
          <Link to="/blog" style={{ color: 'var(--gold)', textDecoration: 'none' }}>← All posts</Link>
          <div className="row">{post.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 64px)' }}>{post.title}</h1>
          <p className="muted" style={{ margin: 0 }}>By Himanshu · {fmtDate(post.date)}</p>
        </div>

        {post.image && (
          <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 'var(--radius)', marginBottom: 32 }} />
        )}

        {post.youtube && (
          <div className="glass" style={{ aspectRatio: '16 / 9', overflow: 'hidden', marginBottom: 32 }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${post.youtube}`}
              title={post.title}
              style={{ width: '100%', height: '100%', border: 0 }}
              allowFullScreen
            />
          </div>
        )}

        <div className="post-body">
          {post.body.map((b, i) => <Block b={b} key={i} />)}
        </div>

        <div className="glass card stack" style={{ marginTop: 48, alignItems: 'flex-start' }}>
          <h3>Want this fixed on your store?</h3>
          <p className="muted" style={{ margin: 0 }}>I audit and speed up Shopify stores, and build new ones that load fast from day one.</p>
          <Link to="/contact" className="btn btn-gold">Get in touch</Link>
        </div>
      </div>
    </article>
  )
}
