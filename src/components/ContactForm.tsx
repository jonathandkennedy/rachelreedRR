"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const practiceOptions = [
  "Family Law / Divorce",
  "Child Custody or Support",
  "Criminal Defense / DUI",
  "Domestic Violence",
  "Personal Injury",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ defaultMatter }: { defaultMatter?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if filled, silently "succeed" without sending.
    if (data.get("company")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(
          json?.errors?.[0]?.message ||
            "Something went wrong. Please call us directly at " + site.phone.display + "."
        );
        setStatus("error");
      }
    } catch {
      setError(
        "We couldn't submit the form. Please call us directly at " + site.phone.display + "."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl text-cream">Thank you — your message is on its way.</h3>
        <p className="mt-3 text-muted">
          Rachel&apos;s office will reach out shortly. If your matter is urgent,
          call us now at{" "}
          <a href={site.phone.href} className="text-gold-light link-underline">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Phone" required>
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="How can we help?">
          <select name="matter" defaultValue={defaultMatter ?? ""} className={inputClass}>
            <option value="" disabled>
              Select a practice area
            </option>
            {practiceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell Rachel what happened" required>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Share a few details about your situation. This is confidential."
            className={inputClass}
          />
        </Field>
      </div>

      {/* Honeypot (hidden from real users) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <label className="mt-5 flex items-start gap-3 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[var(--color-gold)]" />
        <span>
          I understand that contacting Rachel Reed Law does not create an
          attorney–client relationship and that this form is not a substitute for
          legal advice.
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold mt-6 w-full text-base disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Case Review"}
      </button>

      <p className="mt-3 text-center text-xs text-muted-dark">
        Prefer to talk now? Call{" "}
        <a href={site.phone.href} className="text-gold-light">
          {site.phone.display}
        </a>
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded border border-line bg-ink/60 px-3.5 py-3 text-cream placeholder:text-muted-dark outline-none transition-colors focus:border-gold";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-cream">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}
