# Chuski Lab Website

A one-page marketing site for Chuski Lab, a frozen dessert counter run under the AANKA Group family business.

Live: https://chuskilab.com

## How it works

It is a single scrolling React page with no router and no backend. The page is built from section components: navigation, hero, about, menu, gallery, location and footer. The menu is driven by a plain data file (`src/data/menu.js`) holding each item's name, price, flavours and photo, so changing the menu means editing that file. The location section embeds a map and links out to the brand's Instagram. Brand colours and fonts are set up as Tailwind theme tokens in `src/index.css`.

## Stack

- React 19
- Vite
- Tailwind CSS 4 (via the Vite plugin)
- oxlint for linting
- Fonts from Google Fonts

## Run it

```sh
npm install
npm run dev
npm run build
```

## Authorship

I set the requirements and check the results. AI tools write most of the code.

## Status

Live.
