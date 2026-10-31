import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { posts } from '../data/posts.js'
import { promo } from '../data/promo.js'

// Link-in-bio page for Instagram: storesbyhimanshu.com/links
export default function Links() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Himanshu, I saw your Instagram and want to talk about my website / Shopify store.')}`
  const btn = { justifyContent: 'center', width: '100%', minHeight: 56 }
  return (
    <section className="hero" style={{ paddingTop: 50 }}>
      <div className="wrap stack" style={{ maxWidth: 520, gap: 14, alignItems: 'center', textAlign: 'center' }}>
        <img src="/logo.png" alt="StoresByHimanshu" style={{ width: 96, height: 96, borderRadius: '50%' }} />
        <h1 style={{ fontSize: 40 }}>StoresByHimanshu</h1>
        <p className="muted" style={{ margin: '0 0 10px' }}>{site.tagline}</p>

        {promo.active && (
          <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(promo.message)}`} target="_blank" rel="noreferrer" className="promo glass" style={{ width: '100%' }}>
            <img src={promo.mobile} alt={promo.alt} width="941" height="1672" />
          </a>
        )}
        <a className="btn btn-gold" style={btn} href={wa} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        <Link className="btn btn-glass" style={btn} to="/services">Get a website or Shopify store</Link>
        <Link className="btn btn-glass" style={btn} to="/work">See my work</Link>
        <Link className="btn btn-glass" style={btn} to="/resources">Free Shopify Liquid files</Link>

        <span className="eyebrow" style={{ marginTop: 18 }}>Latest on the blog</span>
        {posts.slice(0, 3).map((p) => (
          <Link key={p.slug} className="btn btn-glass" style={{ ...btn, height: 'auto', padding: '14px 22px', lineHeight: 1.35 }} to={`/blog/${p.slug}`}>{p.title}</Link>
        ))}

        <div className="row" style={{ justifyContent: 'center', marginTop: 18 }}>
          <a className="btn btn-glass" href={site.youtube} target="_blank" rel="noreferrer">YouTube</a>
          <a className="btn btn-glass" href={`mailto:${site.email}`}>Email</a>
          <a className="btn btn-glass" href={`tel:+${site.whatsapp}`}>Call</a>
        </div>
      </div>
    </section>
  )
}
