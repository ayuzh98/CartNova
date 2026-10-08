# CartNova SEO deployment notes

The project does not currently define a production hostname. `sitemap.xml` and the `Sitemap` directive in `robots.txt` intentionally use `replace-with-production-domain.example`; replace that token with the actual public hostname before deploying or submitting the sitemap. The sitemap assumes deployment at the domain root; adjust its paths if the site is hosted in a subdirectory.

Canonical links are intentionally omitted while the public origin is unknown. At deployment, add absolute canonical URLs to indexable public pages. For `product-details.html`, generate the canonical from the selected product ID. Do not canonicalize account, cart, checkout, order, wishlist, compare, admin, or 404 pages.

No local raster image suitable for social previews exists in `frontend/assets`. Open Graph titles, descriptions, and types are present; add `og:image` only after a stable, publicly reachable brand image is provided. Do not use a transient product CDN URL as the site-wide social image.

PWA support is deferred: the storefront has no existing install icons or offline contract, and catalog imagery/fonts are remote. A service worker could cache stale customer or catalog state. Revisit after providing app icons and defining offline behavior.
