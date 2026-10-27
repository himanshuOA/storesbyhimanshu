import { posts } from './posts.js'

// Title and description for every page. Google shows these in search results.
// Used in the browser (App.jsx) and at build time (scripts/postbuild.mjs).
export const siteUrl = 'https://storesbyhimanshu.com'

export const pages = {
  '/': {
    title: 'Shopify Developer & Web Designer in Delhi NCR | StoresByHimanshu',
    description:
      'Premium Shopify stores and modern business websites built by Himanshu, a Shopify developer in Greater Noida, Delhi NCR. Store design, speed optimisation and audits.',
  },
  '/work': {
    title: 'Portfolio: Websites & Shopify Stores | StoresByHimanshu',
    description:
      'Websites, Shopify stores and Shopify apps built for real businesses, including The Cameo Studio, Vebe Interiors and a WhatsApp OTP discount app.',
  },
  '/services': {
    title: 'Shopify Store Design, Speed Optimisation & Website Development | StoresByHimanshu',
    description:
      'Custom Shopify stores, business websites, landing pages and Shopify speed optimisation for brands across India. Get a clear price and timeline.',
  },
  '/resources': {
    title: 'Free Shopify Liquid Sections & Design Files | StoresByHimanshu',
    description:
      'Download free Shopify 2.0 Liquid sections, glass UI CSS and design files from StoresByHimanshu tutorials.',
  },
  '/about': {
    title: 'About Himanshu, Shopify Developer in Greater Noida | StoresByHimanshu',
    description:
      'Himanshu is a Shopify and web developer in Delhi NCR who builds fast, premium websites and shares how they are made.',
  },
  '/blog': {
    title: 'Blog: Shopify Speed, Liquid & Web Design Guides | StoresByHimanshu',
    description:
      'Practical guides on Shopify store speed, Shopify Liquid sections and modern website design, written from real projects.',
  },
  '/links': {
    title: 'Links | StoresByHimanshu',
    description:
      'All StoresByHimanshu links in one place: website, latest blog posts, free Shopify files, WhatsApp and YouTube.',
  },
  '/contact': {
    title: 'Contact: Get a Shopify Store or Website Built | StoresByHimanshu',
    description:
      'Call or WhatsApp +91 79007 61555, or email storesbyhimanshu@gmail.com to start your Shopify store or website project.',
  },
}

// Every page including one per blog post — used by the app and by the build.
export const allPages = {
  ...pages,
  ...Object.fromEntries(
    posts.map((p) => [`/blog/${p.slug}`, { title: `${p.title} | StoresByHimanshu`, description: p.description }])
  ),
}

export const pageMeta = (path) => allPages[path.replace(/\/$/, '') || '/'] || pages['/']
