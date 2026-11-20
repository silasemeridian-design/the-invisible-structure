# The Invisible Structure — Stage 1 website

This is the initial responsive static website for **The Invisible Structure**.

## Included
- `index.html` — homepage and navigation
- `styles.css` — responsive editorial styling
- `app.js` — sample cards and date display
- `feed.xml` — placeholder RSS feed
- `README.md` — deployment and next-stage notes

## Important
The three homepage stories are explicitly labelled editorial placeholders. They are not current news, sourced reporting, or verified events. The RSS file is also a placeholder. Do not present this preview as a functioning live intelligence service.

## Preview locally
Open `index.html` in a browser.

## Deploy free with Cloudflare Pages
1. Create a Cloudflare account.
2. Create a GitHub repository and upload the contents of this folder.
3. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that repository.
4. For this plain static site, leave the build command empty and set the output directory to `/` (or the repository root, as shown in the Cloudflare interface).
5. Deploy. Cloudflare will provide a `pages.dev` address.

You can also use a direct-upload workflow in Cloudflare Pages if offered for your account. Do not add a paid plan or purchase a domain if the strict $0 requirement remains.

## Stage 2 — planned, not yet implemented
- Source registry for vetted RSS feeds and public data sources
- Scheduled collection twice daily (06:00 and 18:00 Perth time)
- Deduplication and topic classification
- Source metadata, timestamps, evidence notes and confidence labels
- D1 database and article archive
- RSS generation from published records
- Safe failure behaviour when free quotas are exhausted

## Zero-cost safeguards
Free service limits can change. Keep billing alerts and usage monitoring enabled where available, do not enable paid add-ons, and make scheduled jobs stop gracefully when quotas are reached. Automated AI writing is not guaranteed to be unlimited at $0; the production design must use only a genuinely free allowance or fall back to source-linked metadata without inventing summaries.
