import { Link } from "@/components/Link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const nav = [
  { label: "Home", hash: "home" },
  { label: "About Me", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Contact Me", hash: "contact" },
];
const sectionIds = nav.map((n) => n.hash);

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (window.location.pathname.startsWith("/projects/")) { setActive("projects"); return; }
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = sectionIds[0]!;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return active;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const regular = nav.filter((n) => n.hash !== "contact");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 btn-primary">
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" hash="home" className="font-heading text-base font-semibold text-heading">
          {profile.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {regular.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} aria-current={active === n.hash ? "true" : undefined} className="nav-link text-sm font-medium text-foreground transition-colors hover:text-primary">
              {n.label}
            </Link>
          ))}
          <Link to="/" hash="contact" aria-current={active === "contact" ? "true" : undefined} className="btn-primary py-2">Contact Me</Link>
        </nav>
        <div className="ml-auto mr-3 md:hidden"><Link to="/" hash="contact" className="btn-primary px-3 py-2 text-xs">Contact Me</Link></div>
        <button
          type="button"
          className="btn-outline px-2.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-surface md:hidden">
          <ul className="container-page flex flex-col py-3">
            {regular.map((n) => (
              <li key={n.hash}>
                <Link to="/" hash={n.hash} onClick={() => setOpen(false)} aria-current={active === n.hash ? "true" : undefined} className="block border-l-2 border-transparent py-3 pl-3 text-base font-medium text-foreground transition-colors hover:text-primary aria-[current=true]:border-primary aria-[current=true]:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <Link to="/" hash="contact" onClick={() => setOpen(false)} className="btn-primary w-full">Contact Me</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

