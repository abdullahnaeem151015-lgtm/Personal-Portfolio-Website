import { Check, Copy, Github, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/portfolio";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.21 0h.01Z" />
    </svg>
  );
}

function KaggleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d="M7 3v18M7 13l10-9M10 10l8 11" />
    </svg>
  );
}

export function ContactActions() {
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");

  async function copy() {
    try {
      if (!navigator.clipboard) throw new Error("no clipboard");
      await navigator.clipboard.writeText(contact.email);
      setState("ok");
    } catch {
      setState("error");
    }
    window.setTimeout(() => setState("idle"), 3000);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${contact.email}`} className="btn-primary"><Mail className="h-4 w-4" aria-hidden /> Send Email</a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`} target="_blank" rel="noreferrer" className="btn-outline">Open in Gmail ↗</a>
        <button type="button" onClick={copy} className="btn-outline">
          {state === "ok" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />} Copy email
        </button>
      </div>
      <p role="status" aria-live="polite" className={`mt-3 min-h-5 text-sm ${state === "error" ? "text-destructive" : "text-success"}`}>
        {state === "ok" && "Email address copied to clipboard."}
        {state === "error" && `Could not copy automatically. The address is ${contact.email}.`}
      </p>
      <ul aria-label="Contact details" className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <li>
          <a className="card-base flex h-full min-w-0 items-center gap-3 p-3 hover:border-primary" href={`mailto:${contact.email}`}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><Mail className="h-5 w-5" strokeWidth={2.25} aria-hidden /></span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Email</span>
              <span className="block break-all font-medium text-heading">{contact.email}</span>
            </span>
          </a>
        </li>
        <li>
          <a className="card-base flex h-full items-center gap-3 p-3 hover:border-primary" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><Phone className="h-5 w-5" strokeWidth={2.25} aria-hidden /></span>
            <span>
              <span className="block text-xs text-muted-foreground">Phone</span>
              <span className="block font-medium text-heading">{contact.phone}</span>
            </span>
          </a>
        </li>
      </ul>
      <nav aria-label="Professional profiles" className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
        <a className="card-base flex min-w-0 items-center gap-2 p-3 font-medium text-heading transition-colors hover:border-primary hover:text-primary" href={contact.linkedin} target="_blank" rel="noreferrer">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><LinkedInIcon /></span>
          <span>LinkedIn</span>
        </a>
        <a className="card-base flex min-w-0 items-center gap-2 p-3 font-medium text-heading transition-colors hover:border-primary hover:text-primary" href={contact.github} target="_blank" rel="noreferrer">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><Github className="h-5 w-5" strokeWidth={2.25} aria-hidden /></span>
          <span>GitHub</span>
        </a>
        <a className="card-base flex min-w-0 items-center gap-2 p-3 font-medium text-heading transition-colors hover:border-primary hover:text-primary" href={contact.kaggle} target="_blank" rel="noreferrer">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><KaggleIcon /></span>
          <span>Kaggle</span>
        </a>
      </nav>
    </div>
  );
}
