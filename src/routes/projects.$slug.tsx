import { Link } from "@/components/Link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { featuredProjects, otherProjects, publicDemo, statusLabel } from "@/data/portfolio";
import { Chip, ProjectBanner, WorkflowVisual } from "@/components/ProjectBits";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10 md:grid md:grid-cols-[220px_1fr] md:gap-10">
      <h2 className="mb-4 text-lg font-semibold md:mb-0">{title}</h2>
      <div className="leading-relaxed">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-primary">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

export default function ProjectPage({project: p}: {project: import("@/data/portfolio").Project}) {
  const demo = publicDemo(p);
  const group = p.featured ? featuredProjects : otherProjects;
  const idx = group.findIndex((x) => x.slug === p.slug);
  const next = group[(idx + 1) % group.length] ?? group[0]!;

  return (
    <article className="container-page pt-10 pb-20">
      <Link to="/" hash="projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" aria-hidden /> All projects
      </Link>
      <header className="mt-8 pb-10">
        <p className="eyebrow">{p.category}</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{p.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed">{p.description}</p>
        <p className="mt-4 text-sm text-muted-foreground">Status: {statusLabel[p.status]}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-primary"><Github className="h-4 w-4" aria-hidden /> View on GitHub</a>
          {demo && <a href={demo} target="_blank" rel="noreferrer" className="btn-outline"><ExternalLink className="h-4 w-4" aria-hidden /> Live demo</a>}
        </div>
      </header>

      <div className="pb-10"><ProjectBanner project={p} large /></div>

      <Block title="Problem and project context"><p>{p.businessProblem}</p></Block>
      <Block title="Objective"><p>{p.objective}</p></Block>
      <Block title="Approach and technologies">
        <p>{p.solution}</p>
        <div className="mt-5 flex flex-wrap gap-2">{p.technologies.map((t) => <Chip key={t} label={t} />)}</div>
      </Block>
      <Block title="Implementation">
        <List items={p.features} />
        <div className="mt-6"><WorkflowVisual steps={p.workflow} title={p.title} /></div>
      </Block>
      {(p.evaluation.length > 0 || p.screenshots.length > 0) && (
        <Block title="Evaluation and evidence">
          {p.evaluation.length > 0 && <List items={p.evaluation} />}
          {p.screenshots.length > 0 && (
            <div className={`grid gap-5 md:grid-cols-3 ${p.evaluation.length > 0 ? "mt-6" : ""}`}>
              {p.screenshots.map((s) => (
                <figure key={s.src} className="card-base overflow-hidden">
                  <a href={s.src} target="_blank" rel="noreferrer" aria-label={`Open full size: ${s.caption}`}>
                    <img src={s.src} alt={s.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full bg-muted object-contain" />
                  </a>
                  <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </Block>
      )}
      <Block title="Actual results and limitations">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Results</h3>
        <List items={p.results} />
        <h3 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Limitations</h3>
        <div className="rounded-lg border border-border bg-accent/40 p-5"><List items={p.limitations} /></div>
      </Block>
      <Block title="Links and resources">
        <ul className="space-y-2">
          <li><a className="link" href={p.githubUrl} target="_blank" rel="noreferrer">GitHub repository ↗</a></li>
          {demo ? <li><a className="link" href={demo} target="_blank" rel="noreferrer">Live demonstration ↗</a></li> : <li className="text-sm text-muted-foreground">No verified live demonstration is available.</li>}
          {p.resources.map((r) => <li key={r.url}><a className="link" href={r.url} target="_blank" rel="noreferrer">{r.label} ↗</a></li>)}
          {p.sources.map((s) => <li key={s.url} className="text-sm text-muted-foreground">Evidence reviewed: {s.label}</li>)}
        </ul>
      </Block>
      <Block title="Future improvements"><List items={p.futureImprovements} /></Block>

      <nav aria-label="Next project" className="mt-6 border-t border-border pt-8">
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="card-base block p-5 hover:-translate-y-0.5 hover:border-primary">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Next {p.featured ? "case study" : "project"}</span>
          <span className="mt-1 block font-heading text-lg font-semibold text-heading">{next.title} →</span>
        </Link>
      </nav>
    </article>
  );
}


