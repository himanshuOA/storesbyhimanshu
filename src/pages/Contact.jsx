import { useState } from 'react'
import { site } from '../data/site.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', brand: '', type: 'Shopify Store', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const body = `Name: ${f.name}\nBrand: ${f.brand}\nProject: ${f.type}\n\n${f.message}`
  const send = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('New project: ' + (f.brand || f.name))}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="hero">
      <div className="wrap grid g2" style={{ alignItems: 'start' }}>
        <div className="stack" style={{ gap: 20 }}>
          <span className="eyebrow">Contact</span>
          <h1>Let's build your <span className="gold">store</span>.</h1>
          <p className="lead">Tell me a little about your brand. I usually reply within a day.</p>
          <div className="stack">
            <a href={`mailto:${site.email}`} className="btn btn-glass" style={{ alignSelf: 'flex-start' }}>{site.email}</a>
            <a href={`tel:+${site.whatsapp}`} className="btn btn-glass" style={{ alignSelf: 'flex-start' }}>Call {site.phone}</a>
            {site.whatsapp && (
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-glass" style={{ alignSelf: 'flex-start' }}>
                WhatsApp me
              </a>
            )}
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-glass" style={{ alignSelf: 'flex-start' }}>
              DM "STORE" on Instagram
            </a>
          </div>
        </div>

        <form className="glass card stack" style={{ gap: 18 }} onSubmit={send}>
          <div><label htmlFor="name">Your name</label><input id="name" required value={f.name} onChange={set('name')} /></div>
          <div><label htmlFor="brand">Brand / business</label><input id="brand" value={f.brand} onChange={set('brand')} /></div>
          <div>
            <label htmlFor="type">What do you need?</label>
            <select id="type" value={f.type} onChange={set('type')}>
              <option>Shopify Store</option>
              <option>Business Website</option>
              <option>Landing Page</option>
              <option>Redesign / Speed</option>
              <option>Something else</option>
            </select>
          </div>
          <div><label htmlFor="msg">Tell me about the project</label><textarea id="msg" required value={f.message} onChange={set('message')} /></div>
          <button className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>Send enquiry</button>
        </form>
      </div>
    </section>
  )
}
