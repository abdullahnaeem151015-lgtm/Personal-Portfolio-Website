import { renderToString } from 'react-dom/server';
import { App } from './App';
export { App } from './App';
import { profile, contact, orderedProjects, getProject } from './data/portfolio';
export const paths=['/', ...orderedProjects.map(p=>'/projects/'+p.slug), '/404'];
const escape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function render(pathname:string, origin:string) {
 const p=getProject(pathname.split('/')[2]||'');
 const title=p ? `${p.title} | Abdullah Naeem` : pathname==='/404' ? 'Page not found | Abdullah Naeem' : `${profile.name} | ${profile.title}`;
 const description=p?.description || 'Abdullah Naeem, BS Computer Science undergraduate building Python applications, forecasting tools, recommendation systems and practical data analysis projects.';
 const canonical=origin ? origin+pathname : '';
 const json=p ? {'@context':'https://schema.org','@type':'CreativeWork',name:p.title,description:p.description,url:canonical||undefined,codeRepository:p.githubUrl,author:{'@type':'Person',name:profile.name},keywords:p.technologies.join(', ')} : {'@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:profile.title,description:profile.education,url:origin||undefined,sameAs:[contact.github,contact.linkedin]};
 const meta=`<title>${escape(title)}</title><meta name="description" content="${escape(description)}"/><meta property="og:title" content="${escape(title)}"/><meta property="og:description" content="${escape(description)}"/><meta property="og:type" content="${p?'article':'website'}"/><meta name="twitter:card" content="summary"/><meta name="twitter:title" content="${escape(title)}"/><meta name="twitter:description" content="${escape(description)}"/>${canonical?`<link rel="canonical" href="${escape(canonical)}"/><meta property="og:url" content="${escape(canonical)}"/>`:''}${pathname==='/404'?'<meta name="robots" content="noindex"/>':''}<script type="application/ld+json">${JSON.stringify(json).replace(/</g,'\\u003c')}</script>`;
 return {html:renderToString(<App pathname={pathname}/>),meta};
}
