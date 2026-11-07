import { Link } from "@/components/Link";
import { ArrowRight, BarChart3, Brain, Code2, Database, LayoutTemplate, Sparkles, Table2, Wrench, type LucideIcon } from "lucide-react";
import {
  certificationsPlaceholder, experience, featuredProjects, getProject, profile, contact, services, servicesNote, skillGroups, skillsNote, visibleCertifications, type SkillIcon,
} from "@/data/portfolio";
import { Chip } from "@/components/ProjectBits";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactActions } from "@/components/ContactActions";
import { ContactForm } from "@/components/ContactForm";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2, layout: LayoutTemplate, database: Database, brain: Brain, table: Table2, chart: BarChart3, sparkles: Sparkles, wrench: Wrench,
};

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  const internships = experience.filter((e) => e.type === "internship");
  const employment = experience.filter((e) => e.type === "employment");

  return (
    <>
      {/* Hero */}
      <section id="home" aria-labelledby="hero-title" className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.75fr)] lg:gap-12">
          <div data-reveal className="order-2 lg:order-1">
            <p className="text-sm font-medium text-muted-foreground">
              <span className="font-semibold text-heading">{profile.name}</span> · {profile.title}
            </p>
            <h1 id="hero-title" className="text-gradient mt-6 max-w-4xl pb-1 text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">{profile.intro}</p>
            <ul aria-label="Primary focus" className="mt-5 flex flex-wrap gap-2">
              {profile.focus.map((f) => <li key={f} className="chip chip-key">{f}</li>)}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/" hash="projects" className="btn-primary">View Projects <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link to="/" hash="contact" className="btn-outline">Discuss a Project</Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{profile.education} · <a className="link" href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a> · <a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></p>
          </div>
          <figure className="order-1 mx-auto w-full max-w-[18rem] lg:order-2 lg:ml-auto lg:max-w-sm">
            <img
              src={profile.headshot.src}
              srcSet={profile.headshot.srcSet}
              sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 30vw, (min-width: 640px) 24rem, calc(100vw - 2.5rem)"
              alt={profile.headshot.alt}
              width={profile.headshot.width}
              height={profile.headshot.height}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="block h-auto w-full rounded-xl border border-border object-contain"
            />
          </figure>
        </div>
        <div data-reveal className="mt-14 border-t border-border pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Featured case studies</p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p) => (
              <li key={p.slug}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="card-base block h-full p-4 hover:-translate-y-0.5 hover:border-primary">
                  <span className="block font-heading text-sm font-semibold text-heading">{p.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{p.tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about-title" id="about" className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div data-reveal>
          <SectionHeading eyebrow="About Me" title={profile.aboutHeading} id="about-title" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-lg leading-relaxed">
              {profile.about.map((p) => <p key={p}>{p}</p>)}
            </div>
            <dl className="card-base space-y-4 self-start p-5 text-sm">
              {profile.aboutPoints.map((a) => (
                <div key={a.label}><dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{a.label}</dt><dd className="mt-1 text-heading">{a.value}</dd></div>
              ))}
            </dl>
          </div>
          </div>

          <div data-reveal>
          <h3 className="mt-16 text-2xl font-semibold">Tools & Skills</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{skillsNote}</p></div>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 rounded-xl bg-background p-3 sm:p-5">
            {skillGroups.map((g) => {
              const Icon = icons[g.icon];
              return (
                <li key={g.title} className="card-base flex flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h4 className="text-base font-semibold">{g.title}</h4>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {g.items.map((i) => (
                      <li key={i.name}>
                        <div className="flex items-baseline justify-between gap-3 text-sm">
                          <span className={i.score >= 75 ? "font-semibold text-heading" : ""}>{i.name}</span>
                          <span className="tabular-nums text-xs text-muted-foreground">{i.score}%</span>
                        </div>
                        <div className="skill-bar mt-1.5" role="presentation"><span style={{ width: `${i.score}%` }} /></div>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <h3 data-reveal className="mt-16 text-2xl font-semibold">Certifications</h3>
          {visibleCertifications.length > 0 ? (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCertifications.map((c) => (
                <li key={c.name} className="card-base p-5">
                  <p className="font-heading font-semibold text-heading">{c.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                  {c.credentialUrl && <a className="link mt-3 inline-block text-sm" href={c.credentialUrl} target="_blank" rel="noreferrer">View credential</a>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 rounded-lg border border-dashed border-border bg-background p-5 text-sm text-muted-foreground">
              {certificationsPlaceholder}
            </p>
          )}
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience-title" id="experience" className="container-page py-20 sm:py-24">
        <div data-reveal>
        <SectionHeading eyebrow="Experience" title="Internships" id="experience-title" />
        <ol className="relative border-l border-border pl-8">
          {internships.map((e) => {
            const related = e.relatedProject ? getProject(e.relatedProject) : undefined;
            return (
              <li key={e.organization} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-surface" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{e.role}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.organization}</h3>
                <p className="mt-3 max-w-2xl">{e.summary}</p>
                <p className="mt-2 max-w-2xl"><span className="font-semibold text-heading">Outcome: </span>{e.outcome}</p>
                {related && (
                  <>
                    <ul aria-label="Technologies used" className="mt-3 flex flex-wrap gap-1.5">
                      {related.technologies.slice(0, 6).map((t) => <li key={t}><Chip label={t} /></li>)}
                    </ul>
                    <Link to="/projects/$slug" params={{ slug: related.slug }} className="link mt-3 inline-block text-sm">Read the {related.title} case study →</Link>
                  </>
                )}
              </li>
            );
          })}
        </ol>
        {employment.length > 0 && (
          <>
            <h3 className="mt-14 text-2xl font-semibold">Employment</h3>
            <ul className="mt-6 space-y-6">
              {employment.map((e) => (
                <li key={e.organization}><p className="font-semibold text-heading">{e.role} · {e.organization}</p><p className="mt-1">{e.outcome}</p></li>
              ))}
            </ul>
          </>
        )}
        </div>
      </section>

      {/* Projects */}
      <section aria-labelledby="projects-title" id="projects" className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="container-page" data-reveal>
          <SectionHeading eyebrow="Projects" title="Selected projects" id="projects-title" />
          <ProjectsSection />
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-title" id="contact" className="container-page py-20 sm:py-24">
        <div data-reveal>
        <SectionHeading eyebrow="Contact" title="Get in touch" id="contact-title" />
        <p className="mb-8 max-w-2xl text-lg">
          I am open to {profile.targetRoles.toLowerCase()}, and to project work with startups. Below are the type of projects that demonstrate the kind of work I can contribute to.
        </p>
        <h3 className="text-2xl font-semibold">How I can help</h3>
        <p className="mt-2 mb-6 max-w-2xl text-sm text-muted-foreground">{servicesNote}</p>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((sv) => {
            const related = sv.project ? getProject(sv.project) : undefined;
            return (
              <li key={sv.title} className="card-base flex flex-col p-5 hover:-translate-y-0.5 hover:border-primary">
                <h4 className="text-base font-semibold">{sv.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{sv.problem}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm marker:text-primary">
                  {sv.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <p className="mt-auto pt-4 text-sm">
                  {related && <>Related: <Link to="/projects/$slug" params={{ slug: related.slug }} className="link">{sv.projectNote}</Link></>}
                </p>
              </li>
            );
          })}
          <li className="card-base flex flex-col justify-between border-dashed p-5">
            <p className="text-sm">Not sure which fits? Describe the problem and I will tell you honestly whether I can help.</p>
            <a href="#contact-form-title" className="link mt-4 text-sm">Jump to the form ↓</a>
          </li>
        </ul>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />
          <div>
            <h3 className="mb-4 text-lg font-semibold">Prefer direct contact?</h3>
            <ContactActions />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
