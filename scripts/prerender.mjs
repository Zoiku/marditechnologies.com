// Renders every page to static HTML after `vite build`, so each route ships real content and its own metadata.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");
const { render, PAGES, NOT_FOUND_META, SITE_URL } = await import(
  pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href
);

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function page(url, meta, canonicalPath) {
  const canonical = `${SITE_URL}${canonicalPath}`;
  const head = [
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Mardi Technologies" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE_URL}/web-app-manifest-512x512.png" />`,
    `<meta name="twitter:card" content="summary" />`,
  ].join("\n    ");
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", render(url));
}

for (const meta of PAGES) {
  // Flat files (about.html) are served at /about by Netlify, Vercel, Cloudflare Pages and the .htaccess rules.
  const file = meta.path === "/" ? join(dist, "index.html") : join(dist, `${meta.path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(meta.path, meta, meta.path));
  console.log("prerendered", meta.path);
}

const notFound = page("/404", NOT_FOUND_META, "/").replace(
  '<link rel="canonical"',
  '<meta name="robots" content="noindex" />\n    <link rel="canonical"',
);
writeFileSync(join(dist, "404.html"), notFound);
console.log("prerendered /404.html");

const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.map(
  (p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod></url>`,
).join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("wrote sitemap.xml");

rmSync(join(root, "dist-ssr"), { recursive: true, force: true });
