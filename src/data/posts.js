export const fmtDate = (d) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

// Blog posts. To add a new post, copy one object to the TOP of the list.
// slug: the URL (storesbyhimanshu.com/blog/<slug>) — lowercase, words joined by '-'
// body blocks: { h: 'Heading' }, { p: 'Paragraph' }, { ul: ['point', 'point'] },
//              { ol: ['step', 'step'] }, { code: 'code snippet' }, { tip: 'highlighted note' }
// youtube: optional video ID (the part after watch?v=) to embed at the top.
export const posts = [
  {
    slug: 'why-is-my-shopify-store-slow',
    title: 'Why Is My Shopify Store Slow? 10 Common Causes (and Fixes)',
    description:
      'The ten things that slow down most Shopify stores on mobile, from duplicate tracking tags to oversized images, and how to fix each one.',
    date: '2026-10-22',
    tags: ['Shopify', 'Speed'],
    image: '/blog/why-is-my-shopify-store-slow.png',
    youtube: '',
    body: [
      { p: 'Most Shopify stores are not slow because of Shopify. Shopify’s servers usually respond in well under a second. The slowdown happens in the shopper’s browser, caused by what the store asks the phone to download and run.' },
      { p: 'These are the ten causes I find most often when I audit Shopify stores, roughly in order of how much they hurt.' },
      { h: '1. The same tracking tag loads more than once' },
      { p: 'Google Analytics, Google Ads and Tag Manager are often added by a theme, an app and a developer separately. The same tag then loads two or three times, adding hundreds of kilobytes of JavaScript and sometimes double counting conversions.' },
      { tip: 'Fix: keep one Google tag per ID, ideally inside a single Google Tag Manager container.' },
      { h: '2. Too many third-party scripts' },
      { p: 'Reviews, popups, chat, wishlists, surveys and A/B testing tools each add their own scripts. Together they can keep a phone busy for many seconds before a shopper can tap anything.' },
      { tip: 'Fix: remove apps you no longer use, and load chat, popups and review widgets only after the page is ready or when they scroll into view.' },
      { h: '3. Oversized images' },
      { p: 'A 2000-pixel banner shown at 400 pixels on a phone wastes data. Images are usually the heaviest part of a store page.' },
      { tip: 'Fix: use Shopify’s image_url filter with a width, add srcset, and let Shopify serve WebP automatically.' },
      { h: '4. A slow hero image' },
      { p: 'The first big image or slideshow is often the Largest Contentful Paint element. If it is lazy-loaded or very large, the page feels slow even when everything else is fine.' },
      { tip: 'Fix: do not lazy-load the first image, preload it, and size it for mobile.' },
      { h: '5. Layout shift from late-loading sections' },
      { p: 'Sections filled by apps, such as bestseller carousels, often load late and push the page down. Shoppers tap the wrong thing, and Google counts it against you.' },
      { tip: 'Fix: reserve space with a min-height or a skeleton so nothing jumps.' },
      { h: '6. Render-blocking scripts in the head' },
      { p: 'Libraries like jQuery or A/B testing scripts placed in the <head> without defer stop the page from drawing until they finish downloading.' },
      { tip: 'Fix: add defer or async, or move the script to the end of the page.' },
      { h: '7. Theme code loaded twice' },
      { p: 'Custom JavaScript included in two places can throw errors like “Identifier has already been declared”, which can break features further down the file.' },
      { tip: 'Fix: include each file once and guard custom element definitions.' },
      { h: '8. Missing font files' },
      { p: 'Fonts pointing to an old theme folder return 404 errors. The browser waits for them and then falls back, wasting requests and slowing text rendering.' },
      { tip: 'Fix: update font URLs to the current theme assets, and use font-display: swap.' },
      { h: '9. Old libraries nobody uses' },
      { p: 'jQuery, alert libraries and old analytics code often stay in a theme long after the feature that needed them is gone.' },
      { tip: 'Fix: search the theme for each library, and remove it if nothing calls it.' },
      { h: '10. Unused preconnect hints' },
      { p: 'Preconnecting to a dozen domains makes the browser open connections it never uses, competing with the files that matter.' },
      { tip: 'Fix: keep preconnects only for the two or three domains the page really needs early.' },
      { h: 'How to check your own store' },
      { p: 'Open PageSpeed Insights, paste a product or collection page URL, and look at the mobile score. The Diagnostics section lists which of the causes above apply to your store.' },
      { p: 'Want a full audit with a clear fix plan? Get in touch and I will review your store.' },
    ],
  },
  {
    slug: 'check-shopify-store-speed-pagespeed-insights',
    title: 'How to Check Your Shopify Store Speed with PageSpeed Insights',
    description:
      'A simple guide to testing your Shopify store on PageSpeed Insights and understanding LCP, TBT and CLS in plain words.',
    date: '2026-10-22',
    tags: ['Shopify', 'Speed', 'Guide'],
    image: '/blog/check-shopify-store-speed-pagespeed-insights.png',
    youtube: '',
    body: [
      { p: 'Google’s PageSpeed Insights is free and takes a minute. Here is how to run it on your Shopify store and what the numbers mean.' },
      { h: 'Run the test' },
      { ol: [
        'Go to pagespeed.web.dev.',
        'Paste the URL of a real page shoppers land on: your homepage, a collection or a product page.',
        'Click Analyze and open the Mobile tab. Most of your shoppers are on phones, and mobile scores are always lower.',
      ] },
      { tip: 'Test a few different pages. A homepage with a slideshow and a product page with reviews can have very different problems.' },
      { h: 'The three numbers that matter most' },
      { ul: [
        'LCP (Largest Contentful Paint): how long until the main image or heading appears. Aim for under 2.5 seconds.',
        'TBT (Total Blocking Time): how long scripts freeze the phone so taps do nothing. Aim for under 200 milliseconds.',
        'CLS (Cumulative Layout Shift): how much the page jumps while loading. Aim for under 0.1.',
      ] },
      { h: 'Read the Diagnostics' },
      { p: 'Scroll down to Diagnostics. Items like “Reduce unused JavaScript”, “Properly size images” and “Avoid large layout shifts” tell you exactly which files and sections cause the problem.' },
      { h: 'Do not chase 100' },
      { p: 'A Shopify store with reviews, analytics and payment apps will rarely score 100 on mobile. Moving from 20 or 30 to 60 or 70 is what shoppers actually feel.' },
      { p: 'If the report is hard to read, send me your store link and I will explain what is slowing it down.' },
    ],
  },
]