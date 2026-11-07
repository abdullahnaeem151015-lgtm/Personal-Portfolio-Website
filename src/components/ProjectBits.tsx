import { ArrowRight, BarChart3, BookOpen, Bot, Car, ExternalLink, Github, HeartPulse, LineChart, SearchCheck, type LucideIcon } from "lucide-react";
import { Link } from "@/components/Link";
import { keySkills, publicDemo, statusLabel, type Project } from "@/data/portfolio";

const themes: Record<string, { icon: LucideIcon; from: string; to: string; glow: string; tag: string }> = {
  "arvf-engine": { icon: Car, from: "#1d4ed8", to: "#0891b2", glow: "#22d3ee", tag: "Residual value forecasting" },
  "future-sales-forecasting": { icon: LineChart, from: "#7c3aed", to: "#2563eb", glow: "#a78bfa", tag: "Time-series sales forecasting" },
  "content-refresh-recommendation-study": { icon: SearchCheck, from: "#0d9488", to: "#2563eb", glow: "#5eead4", tag: "Content refresh prioritisation" },
  "personalized-course-recommender": { icon: BookOpen, from: "#c026d3", to: "#6366f1", glow: "#e879f9", tag: "Personalised course ranking" },
  "smart-hospital-management-system": { icon: HeartPulse, from: "#059669", to: "#0ea5e9", glow: "#6ee7b7", tag: "Hospital operations desktop app" },
  "gemini-mcp-document-agent": { icon: Bot, from: "#ea580c", to: "#db2777", glow: "#fdba74", tag: "LLM tool-calling agent" },
  "ecommerce-sales-customer-case-study": { icon: BarChart3, from: "#0284c7", to: "#4f46e5", glow: "#7dd3fc", tag: "Sales & profitability analysis" },
};

function pickSteps(steps: string[], n: number) {
  if (steps.length <= n) return steps;
  return Array.from({ length: n }, (_, i) => steps[Math.round((i * (steps.length - 1)) / (n - 1))]!);
}

export function ProjectBanner({ project, large = false }: { project: Project; large?: boolean }) {
  const t = themes[project.slug] ?? themes["arvf-engine"]!;
  const Icon = t.icon;
  const steps = pickSteps(project.workflow, 4);
  return (
    <div
      role="img"
      aria-label={`${project.title} banner: ${steps.join(" → ")}`}
      className={`relative overflow-hidden rounded-xl border border-white/10 ${large ? "p-8 sm:p-10" : "p-5"}`}
      style={{ background: `linear-gradient(135deg, ${t.from}33 0%, #0b1020 55%, ${t.to}33 100%)` }}
    >
      <div aria-hidden className="absolute -right-10 -top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: t.glow, opacity: 0.25 }} />
      <div aria-hidden className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.18) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="relative flex items-center gap-4">
        <span className={`flex shrink-0 items-center justify-center rounded-2xl shadow-lg ${large ? "h-16 w-16" : "h-12 w-12"}`} style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})`, boxShadow: `0 8px 24px ${t.from}66` }}>
          <Icon className={large ? "h-8 w-8 text-white" : "h-6 w-6 text-white"} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: t.glow }}>{t.tag}</p>
          <p className={`truncate font-heading font-semibold text-white ${large ? "text-2xl" : "text-base"}`}>{project.title}</p>
        </div>
      </div>
      <ol aria-hidden className="relative mt-5 flex items-stretch gap-1.5">
        {steps.map((s, i) => (
          <li key={s} className="flex min-w-0 flex-1 items-center gap-1.5">
            <div className="h-full min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-sm">
              <span className="block text-[10px] font-bold" style={{ color: t.glow }}>0{i + 1}</span>
              <span className={`line-clamp-2 block leading-tight text-slate-200 ${large ? "text-xs" : "text-[10px]"}`}>{s}</span>
            </div>
            {i < steps.length - 1 && <ArrowRight className="h-3 w-3 shrink-0" style={{ color: t.glow }} />}
          </li>
        ))}
      </ol>
    </div>
  );
}
export function Chip({ label }: { label: string }) {
  const key = keySkills.includes(label);
  return <span className={`chip ${key ? "chip-key" : ""}`}>{label}</span>;
}

export function WorkflowVisual({ steps, title }: { steps: string[]; title: string }) {
  return (
    <figure className="card-base p-5">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-heading">Implementation workflow</span>
        <span className="text-xs text-muted-foreground">Diagram based on the repository description — not an app screenshot</span>
      </figcaption>
      <ol className="flex flex-wrap items-center gap-2" aria-label={`${title} workflow steps`}>
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-md border border-border bg-background px-3 py-2 text-xs font-medium">
              <span className="mr-1.5 text-primary">{i + 1}.</span>{s}
            </span>
            {i < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const demo = publicDemo(project);
  const shown = compact ? 4 : 6;
  return (
    <article className="card-base group relative flex w-full flex-col p-5 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-blue-500/10 focus-within:border-primary sm:p-6">
      {!compact && <div className="mb-5"><ProjectBanner project={project} /></div>}
      <p className="eyebrow">{project.tag}</p>
      <h3 className="mt-2 text-xl font-semibold">
        <Link to="/projects/$slug" params={{ slug: project.slug }} className="after:absolute after:inset-0 hover:text-primary">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, shown).map((t) => <Chip key={t} label={t} />)}
        {project.technologies.length > shown && <span className="chip">+{project.technologies.length - shown}</span>}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">{statusLabel[project.status]}</span>
        <span className="relative z-10 flex items-center gap-4">
          <a className="link inline-flex items-center gap-1" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source code on GitHub`}><Github className="h-3.5 w-3.5" aria-hidden />Code</a>
          {demo && <a className="link inline-flex items-center gap-1" href={demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><ExternalLink className="h-3.5 w-3.5" aria-hidden />Demo</a>}
          <span aria-hidden className="font-semibold text-primary transition-transform group-hover:translate-x-0.5">{project.featured ? "Case study →" : "Details →"}</span>
        </span>
      </div>
    </article>
  );
}


