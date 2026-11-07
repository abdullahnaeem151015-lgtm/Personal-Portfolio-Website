import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
execFileSync('node',['node_modules/vite/bin/vite.js','build'],{stdio:'inherit'});
execFileSync('node',['node_modules/vite/bin/vite.js','build','--ssr','src/prerender.tsx','--outDir','.prerender'],{stdio:'inherit'});
const {render,paths}=await import('../.prerender/prerender.js');
const rawOrigin=process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:'');
const origin=rawOrigin ? new URL(rawOrigin).origin : '';
const template=readFileSync('dist/index.html','utf8');
for(const path of paths){const {html,meta}=render(path,origin);const dest=path==='/'?'dist/index.html':path==='/404'?'dist/404.html':`dist${path}/index.html`;mkdirSync(resolve(dest,'..'),{recursive:true});writeFileSync(dest,template.replace('<!--seo-->',meta).replace('<!--app-->',html));}
writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\n${origin?'Sitemap: '+origin+'/sitemap.xml\n':''}`);
writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin?paths.filter(p=>p!='/404').map(p=>`<url><loc>${origin}${p}</loc></url>`).join(''):''}</urlset>`);
console.log(`Prerendered ${paths.length} pages. Canonical origin: ${origin||'unset; set SITE_URL at deployment'}`);
