import { useState } from "react";
import { featuredProjects, otherProjects, projectTags, type ProjectTag } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectBits";

export function ProjectsSection() {
  const [tag, setTag] = useState<ProjectTag | "All">("All");
  const match = (t: ProjectTag) => tag === "All" || tag === t;
  const featured = featuredProjects.filter((p) => match(p.tag));
  const others = otherProjects.filter((p) => match(p.tag));
  const total = featured.length + others.length;

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {(["All", ...projectTags] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
            className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary aria-pressed:border-transparent aria-pressed:bg-accent aria-pressed:text-accent-foreground"
          >
            {t}
          </button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="sr-only">{total} {total === 1 ? "project" : "projects"} shown</p>

      {featured.length > 0 && (
        <section aria-labelledby="featured-title">
          <h3 id="featured-title" className="text-2xl font-semibold">Featured Case Studies</h3>
          <p className="mt-2 mb-6 max-w-2xl text-sm text-muted-foreground">Each one has a detailed write-up covering the problem, approach, evidence and limitations.</p>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((p) => <li key={p.slug} className="flex"><ProjectCard project={p} /></li>)}
          </ul>
        </section>
      )}

      {others.length > 0 && (
        <section aria-labelledby="other-title" className={featured.length > 0 ? "mt-16" : ""}>
          <h3 id="other-title" className="text-2xl font-semibold">Other Technical Projects</h3>
          <p className="mt-2 mb-6 max-w-2xl text-sm text-muted-foreground">Smaller academic and learning projects.</p>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((p) => <li key={p.slug} className="flex"><ProjectCard project={p} compact /></li>)}
          </ul>
        </section>
      )}

      {total === 0 && <p className="text-muted-foreground">No projects in this category.</p>}
    </div>
  );
}
