import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { contact } from "@/data/portfolio";

const projectTypes = ["Client project / custom collaboration", "Data analysis & reporting", "Forecasting prototype", "ML-backed web application", "Recommendation system", "Automation / LLM tool", "Job opportunity", "Something else"];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("bot-field")) {
      return;
    }

    const formAction = form.getAttribute("action") || "/";

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const payload = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      if (key === "bot-field") continue;
      payload.append(key, String(value));
    }
    payload.set("form-name", "contact");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      const statusText = error instanceof Error && /^HTTP \d{3}$/.test(error.message) ? error.message : "HTTP status unavailable";
      setError(`Something went wrong while submitting the form (${statusText}). Please try again, or email ${contact.email} directly.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card-base grid gap-4 p-5 sm:p-6" aria-labelledby="contact-form-title" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <h3 id="contact-form-title" className="text-lg font-semibold">Discuss a project</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-heading">Name
          <input className="field" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-heading">Email
          <input className="field" name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-heading">Project type
        <select className="field" name="type" required defaultValue="">
          <option value="" disabled>Select a type</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-heading">Project description
        <textarea className="field min-h-32" name="message" required minLength={20} placeholder="What problem are you trying to solve, and what data or tools do you already have?" />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary" disabled={isSubmitting} aria-busy={isSubmitting}>
          <Mail className="h-4 w-4" aria-hidden /> {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <p className="text-xs text-muted-foreground">We’ll receive your enquiry through Netlify Forms and reply from the website’s contact workflow.</p>
      </div>
      <p role="status" aria-live="polite" className="min-h-5 text-sm">
        {success && <span className="text-success">Thanks — your message has been sent successfully.</span>}
        {error && <span className="text-destructive">{error}</span>}
      </p>
    </form>
  );
}
