# Maintain

Static site, GitHub Pages, DNS at Gandi. Push to `main` = live.

- `app-ads.txt` : ad networks, critical, edit here
- `index.html` : homepage
- `comingsoon.html` : placeholder for unreleased games
- `store/*.html` : smart links (Android -> Play Store, iOS -> App Store)
- `legal.html`, `terms.html`, `privacypolicy*.html`, `manifesto*.html` : static pages
- `assets/` : css, js, img, fonts, video
- `studio/` : css/js of the static pages
- `CNAME`, `.nojekyll` : GitHub Pages config
- Analytics : GA4 `G-ER5NN0LP8B` + consent default in `<head>` of every page, banner `assets/js/consent.js` before `</body>` (copy both from `comingsoon.html` for a new page)
- Consent duration (6 months) is set twice: `MAX_AGE` in `assets/js/consent.js` and `15724800000` in each page `<head>`. Change both.

After each deploy or DNS change, both must answer 200 `text/plain`:
`curl -sI https://dualcat.io/app-ads.txt` and `curl -sI https://www.dualcat.io/app-ads.txt`
