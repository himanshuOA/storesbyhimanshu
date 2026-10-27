// Your portfolio. To add a new client, copy one object and fill it in.
// image: put a screenshot in /public/work/ and write '/work/your-file.jpg' (optional).
export const projects = [
  {
    slug: 'whatsapp-otp-discount-popup',
    type: 'App',
    name: 'WhatsApp OTP Discount Popup',
    category: 'Shopify app development',
    location: '',
    url: '/blog/whatsapp-otp-discount-popup-shopify',
    linkLabel: 'Read how it works',
    summary:
      'A Shopify popup that verifies a shopper’s WhatsApp number with an OTP sent through AiSensy, then creates a unique, single-use discount code through the Shopify Admin API.',
    stack: ['Node.js', 'Shopify Admin API', 'AiSensy', 'Liquid'],
    tint: '#b5523a',
    image: '',
  },
  {
    slug: 'ranu-digital',
    type: 'Website',
    name: 'Ranu Digital',
    category: 'Website & Shopify studio',
    location: '',
    url: 'https://ranu-digital-kappa.vercel.app/',
    summary:
      'A 3D scroll animation website for a digital creative studio offering web design and Shopify solutions. Features interactive geometric typography and smooth scroll-triggered animations.',
    stack: ['React', '3D Animation', 'Vercel'],
    tint: '#4a90e2',
    image: '/work/ranu-digital.jpg',
  },
  {
    slug: 'cameo-studio',
    type: 'Website',
    name: 'The Cameo Studio',
    category: 'Photography website',
    location: 'Greater Noida',
    url: 'https://cameo-studio.vercel.app/',
    summary:
      'A gallery-first website for a photography studio covering weddings, pre-wedding, maternity, baby, food and product shoots.',
    stack: ['React', 'Vercel'],
    tint: '#d9a441',
    image: '',
  },
  {
    slug: 'vebe-interiors',
    type: 'Website',
    name: 'Vebe Interiors',
    category: 'Interior design website',
    location: '',
    url: 'https://www.vebeinteriors.com/',
    summary:
      'A clean showcase website for an interior design and turnkey construction company.',
    stack: ['Website design', 'Development'],
    tint: '#c9714f',
    image: '',
  },
]
