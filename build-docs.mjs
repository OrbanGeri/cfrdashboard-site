import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/orban/.claude/tools/md2pdf/');
const { marked } = require('marked');
const md = readFileSync('D:/Munka/AI_munkakonyvtar/Vibe_Coding/cfr-dashboard/hello-world/docs/getting-started.md', 'utf8');
// Drop the H1 (the page template renders its own) and render the rest.
const body = marked.parse(md.replace(/^# .*\n/, ''), { gfm: true });
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Getting started – CFR Dashboard</title>
<meta name="description" content="Set up CFR Dashboard for Jira in about five minutes: tokens, configuration, dashboard, issue panel and event export.">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<div class="page">
  <nav><a href="/">Home</a><a href="/docs/">Documentation</a><a href="/privacy/">Privacy Policy</a><a href="/terms/">End User Terms</a></nav>
  <h1>CFR Dashboard for Jira — Getting started</h1>
${body}
  <footer>CFR Dashboard · Gergely Orbán, sole proprietor (Hungary)</footer>
</div>
</body>
</html>
`;
writeFileSync('D:/Munka/AI_munkakonyvtar/Vibe_Coding/cfrdashboard-site/docs/index.html', html);
console.log('ok', html.length);
