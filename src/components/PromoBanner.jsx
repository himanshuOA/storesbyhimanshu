import { promo } from '../data/promo.js'
import { site } from '../data/site.js'

// Shows the desktop banner on wide screens and the tall mobile banner on phones.
export default function PromoBanner({ style }) {
  if (!promo.active) return null
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(promo.message)}`
  return (
    <section style={{ padding: '24px 0', ...style }}>
      <div className="wrap">
        <a href={href} target="_blank" rel="noreferrer" className="promo glass" aria-label="Book the Rs 99 checkup on WhatsApp">
          <picture>
            <source media="(max-width: 700px)" srcSet={promo.mobile} width="941" height="1672" />
            <img src={promo.desktop} alt={promo.alt} width="1774" height="887" loading="lazy" decoding="async" />
          </picture>
        </a>
      </div>
    </section>
  )
}
