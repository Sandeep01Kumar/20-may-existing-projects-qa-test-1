# Express Hello World Tutorial

## Overview

This repository hosts a minimal Node.js + Express tutorial server at the repository root. The server exposes two `GET` endpoints — `/` returning a "Hello World" page and `/good-evening` returning a "Good Evening" page — and serves both responses as styled HTML documents. The page text on each endpoint is rendered using the typography defined in the attached Figma design (Inter / Semi Bold (font-weight 600) / 16px font-size / 24px line-height / color `#000000`), and each page also renders a faithful reproduction of the Figma "Support drop-down menu" card so that the design fidelity is verifiable visually.

## Requirements

- Node.js ≥ 18 (Node.js 24 LTS "Krypton" recommended; Active LTS through 2026-10-20)
- npm (bundled with Node.js)

## Install

Install runtime dependencies (Express) into a local `node_modules/` directory:

```bash
npm install
```

## Run

Start the Express server from the repository root:

```bash
npm start
```

The server starts on http://localhost:3000.

## Test

The project does not ship an automated test suite; the two endpoints are verified manually with `curl` (or by opening the URLs in a browser).

Verify the `GET /` endpoint:

```bash
curl http://localhost:3000/
```

This returns the Hello World HTML page, which renders an `<h1>Hello World</h1>` heading plus a faithful reproduction of the Figma "Support drop-down menu" card (the four support links: Docs, support@blitzy.com, System status, FAQ).

Verify the `GET /good-evening` endpoint:

```bash
curl http://localhost:3000/good-evening
```

This returns the Good Evening HTML page, which renders an `<h1>Good Evening</h1>` heading plus the same demonstration block.

Because `curl` prints raw HTML, opening the two URLs in a browser is the recommended way to verify the Figma typography (Inter Semi Bold 16/24) and the visual rendering of the Support drop-down menu card.

## Project Structure

```text
.
├── app.js
├── package.json
├── public/
│   ├── styles.css
│   └── icons/
│       ├── icon-library.svg
│       ├── icon-envelope.svg
│       ├── icon-pulse.svg
│       └── icon-help-circle.svg
├── views/
│   ├── hello.html
│   └── good-evening.html
├── .gitignore
└── README.md
```

## Endpoints

- `GET /` — Returns the Hello World HTML page (heading text: "Hello World").
- `GET /good-evening` — Returns the Good Evening HTML page (heading text: "Good Evening").

## Design Reference

The page text design and the "Support drop-down menu" card on both endpoint pages follow the attached Figma file:

- Figma URL: https://www.figma.com/design/2qR7NSTmQLynkmlj9B4ltc/Blitzy-Platform-1.0?node-id=28729-233118&p=f&t=F89tO9DqxJD1wGC9-0

The typography token applied to all visible page text is:

- Font family: Inter
- Font weight: Semi Bold (600)
- Font size: 16px
- Line height: 24px
- Text alignment: left
- Color: `#000000`

The Inter typeface is loaded via Google Fonts from https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap, so no binary font file is vendored in the repository.

## Unrelated Sub-Project Notice

The `springboot-product-crud-api-master/` directory is an **unrelated** Spring Boot + Java 17 + Maven + MySQL CRUD API for products. It is **not used by** this Node.js tutorial and is documented separately at `springboot-product-crud-api-master/README.md`. The Spring Boot project listens on port 8090; the Node.js tutorial listens on port 3000. The two projects can be run simultaneously on a single host without conflict.
