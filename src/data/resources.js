// Shopify Liquid sections, design files and other downloads.
// Put the file in /public/resources/liquid/ or /public/resources/design/
// and add an entry here. type: 'liquid' | 'design' | 'code'
// price: 0 for free, or a number for paid (paid items open a "Buy" message).
export const resources = [
  {
    id: 'glass-hero',
    title: 'Liquid Glass Hero Section',
    type: 'liquid',
    description:
      'A frosted-glass hero section for any Shopify 2.0 theme. Heading, text, button and background image, all editable in the theme editor.',
    file: './resources/liquid/sbh-glass-hero.liquid',
    price: 0,
    tags: ['Shopify 2.0', 'Section', 'Hero'],
  },
  {
    id: 'glass-css',
    title: 'Glass UI Starter CSS',
    type: 'code',
    description:
      'The exact glass card, button and blur styles used on this website. Drop it into any HTML, React or Shopify project.',
    file: './resources/design/sbh-glass-ui.css',
    price: 0,
    tags: ['CSS', 'Glassmorphism'],
  },
]

export const resourceTypes = [
  { key: 'all', label: 'All' },
  { key: 'liquid', label: 'Shopify Liquid' },
  { key: 'design', label: 'Design files' },
  { key: 'code', label: 'Code' },
]
