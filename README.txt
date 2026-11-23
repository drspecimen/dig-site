DIG website (drspecimen.online) — static site, no build step.

Pages: index, etomi, services, industries, about, responsible-ai, insights, contact, privacy, 404
Assets: assets/css/site.css, assets/js/site.js, assets/img/*
Also: vercel.json (clean URLs + security headers), sitemap.xml, robots.txt, site.webmanifest

Deploy (same as before):
1. Replace the old files in your DIG site repo with everything in this folder (keep the folder structure).
2. git add -A && git commit -m "New DIG website" && git push
3. Vercel redeploys drspecimen.online automatically.

To open a product that is "Coming soon" later, ask for the product page to be added and its card switched to Live.
