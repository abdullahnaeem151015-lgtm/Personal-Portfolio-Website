import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/portfolio";

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
      <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" aria-hidden /><a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" aria-hidden /><a className="link" href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></li>
        <li className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-primary" aria-hidden /><a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li className="flex items-center gap-2"><Github className="h-4 w-4 text-primary" aria-hidden /><a className="link" href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </div>
  );
}

