# StoresByHimanshu website

Vite + React site with a liquid-glass design. Six pages: Home, Work, Services, Resources, About, Contact.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

## Deploy (Vercel)

Push to GitHub, import the repo on Vercel, and keep the defaults (Framework: Vite).
`vercel.json` is already set so page refreshes on /work, /about etc. don't 404.
Then add `storesbyhimanshu.com` under Project → Settings → Domains and copy the DNS records into BigRock.

## Everyday edits — you only touch `src/data/`

| What | File |
|---|---|
| Email, WhatsApp, Instagram, YouTube | `src/data/site.js` |
| Add a new client project | `src/data/projects.js` (screenshot goes in `public/work/`) |
| Add a Shopify Liquid section or design file | put the file in `public/resources/liquid/` or `public/resources/design/`, then add an entry in `src/data/resources.js` |

Set `price` to a number on a resource to show a "Buy" button instead of "Download".

## Look & feel

All colours and fonts are variables at the top of `src/styles.css` (`--gold`, `--rose`, `--bg` …).
Change them there and the whole site follows.
