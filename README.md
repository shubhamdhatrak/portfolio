# Shubham Dhatrak, Portfolio

Public portfolio site for [shubhamdhatrak.github.io/portfolio](https://shubhamdhatrak.github.io/portfolio/).

## Live Site

[https://shubhamdhatrak.github.io/portfolio/](https://shubhamdhatrak.github.io/portfolio/)

## Development

```bash
cd ui
npm install
npx nx serve portfolio    # http://localhost:4200
npx nx build portfolio    # production build
npx nx test portfolio     # run tests
```

## Deployment

Pushes to `main` or `master` that touch `ui/` trigger GitHub Actions deployment to GitHub Pages.

1. Repository **Settings → Pages → Source: GitHub Actions**
2. Push to `main` or `master`

The site is served at `/portfolio/` (matching the repository name).
