"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
          Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something together.
        </h2>
        <p className="mt-4 max-w-md text-ink-dim">
          Open to full-stack and AI engineering roles. Reach out directly, or
          use the form below.
        </p>

        {status === "sent" ? (
          <div className="mt-10 rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 px-5 py-4 text-sm text-ink">
            Message sent â€” thanks for reaching out. I&apos;ll reply soon.
          </div>
        ) : (
          <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none focus:border-accent-cyan"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none focus:border-accent-cyan"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none focus:border-accent-cyan"
            />

            {status === "error" && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-cyan disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sendingâ€¦" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
