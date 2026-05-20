/**
 * Express.js application entry point.
 *
 * Bootstraps a minimal HTTP server that exposes two GET endpoints styled per
 * the attached Figma design ("Blitzy-Platform-1.0", frame "Support drop-down
 * menu", node 28729:233119):
 *
 *   - GET /              -> views/hello.html         (heading "Hello World")
 *   - GET /good-evening  -> views/good-evening.html  (heading "Good Evening")
 *
 * The public/ directory is mounted as a static asset root so the rendered
 * HTML pages can fetch /styles.css (Figma typography + menu card tokens) and
 * /icons/icon-*.svg (the four Figma drop-down glyphs) without any extra
 * routing.
 *
 * Architecture notes (per Agent Action Plan section 0.6):
 *   - CommonJS module system (sibling package.json declares "type": "commonjs").
 *   - Express 5.2.x is the sole request handler; no native Node HTTP
 *     server fallback is used.
 *   - No body-parser, logger, security, template-engine, or 404 middleware is
 *     configured — the tutorial scope accepts no input and returns only
 *     static HTML pages.
 *   - PORT is hardcoded to 3000 (canonical Express tutorial port; intentionally
 *     distinct from the unrelated Spring Boot sub-project on port 8090).
 */

'use strict';

const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// Serve static assets (CSS, SVG icons) from the public/ directory.
// - public/styles.css        -> /styles.css
// - public/icons/icon-*.svg  -> /icons/icon-*.svg
app.use(express.static(path.join(__dirname, 'public')));

// GET / — returns the Hello World page.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hello.html'));
});

// GET /good-evening — returns the Good Evening page.
app.get('/good-evening', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'good-evening.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
