import { SiteHeader } from './components/SiteHeader';
import Home from './routes/index';
import ProjectPage from './routes/projects.$slug';
import { getProject, contact } from './data/portfolio';
import { useReveal } from './components/useReveal';

export function App({pathname}:{pathname:string}) {
 useReveal([pathname]);
 const slug=pathname.replace(/\/$/,'').split('/')[2];
 const project=getProject(slug || '');
 return <><SiteHeader/><main id="main">{pathname==='/' ? <Home/> : project ? <ProjectPage project={project}/> : <section className="container-page py-24"><h1 className="text-4xl font-semibold">Page not found</h1><a className="btn-primary mt-6" href="/">Back home</a></section>}</main><footer className="border-t border-border bg-surface"><div className="container-page flex flex-wrap justify-between gap-4 py-8 text-sm text-muted-foreground"><p>© {new Date().getFullYear()} Abdullah Naeem</p><a className="link" href="/#contact">Contact Me</a><a className="link" href={`mailto:${contact.email}`}>Send Email</a><p>Built with React and TypeScript.</p></div></footer></>;
}
