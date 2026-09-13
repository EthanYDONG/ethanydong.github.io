# Yiwei Dong's personal website

A static academic homepage with biography, news, publications, CV, and contact information.

## Edit the website

- `index.html`: all page content, publications, experience, contact links, and search metadata.
- `assets/site.css`: the layout and colors from nyudyw.github.io, with shared navigation/footer font size, weight, and letter spacing.
- `assets/mobile.css`: phone layout, visible portrait, touch targets, and footer adjustments. Wider landscape adjustments apply only to touch devices.
- `assets/favicon.svg`: editable DYW icon source; regenerate the raster icons after changing it.
- `favicon.png` and `favicon.ico`: DYW icons for browsers and search results. Keep these public URLs stable so search engines can refresh them.
- `assets/site.js`: the Selected / All publication filter. Set a paper's `data-selected` attribute to `true` or `false`.
- `assets/cv/`: portrait and CV. The original public CV path is preserved.
- `assets/publications/`: locally hosted papers. The original public PDF paths are preserved.

There is no build step or package installation. Open `index.html` in a browser, or run `python -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Publish with GitHub Pages

Push these files to a public repository. In **Settings → Pages**, select **Deploy from a branch**, the publishing branch, and **/(root)**. The `.nojekyll` file tells GitHub Pages to serve these static files directly.

Before changing the website address, update the canonical URL and `og:url` in `index.html`, the URL in `sitemap.xml`, and the sitemap URL in `robots.txt`. Also update the personal GitHub link if the profile account changes; research repository links should continue pointing to their actual repositories.

Asset links are relative, so the website works both at an account's root address and under a project path. Publication and contact information remain available with JavaScript disabled. Raleway is loaded from Google Fonts; the page falls back to system fonts when that service is unavailable.
