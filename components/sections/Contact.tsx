"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
    <section id="contact" className="contact-section py-24 sm:py-32">
      <Reveal className="contact-layout mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="contact-copy">
          <p className="contact-kicker font-mono text-[10px] uppercase tracking-[.18em]">
            <span /> Get in touch
          </p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
            Looking for a developer
            <span>to build your next product?</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink-dim sm:text-base">
            I&apos;m open to full-time roles, internships, freelance projects, and engineering collaborations. Based in Coimbatore, India; open to remote and on-site opportunities.
          </p>
          <a className="contact-email mt-8 inline-flex items-center gap-3" href="mailto:pranesh8506s@gmail.com">
            <span><Mail size={16} /></span>
            <span>pranesh8506s@gmail.com</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span>01 <i /> 02</span>
            <p>Send a note</p>
          </div>

        {status === "sent" ? (
          <div className="contact-success mt-8 rounded-xl border px-5 py-5 text-sm">
            Message sent — thanks for reaching out. I&apos;ll reply soon.
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="contact-fields-row">
              <label className="contact-field"><span>Name</span><input type="text" required autoComplete="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} /></label>
              <label className="contact-field"><span>Email</span><input type="email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            </div>
            <label className="contact-field"><span>What are you thinking about?</span><textarea required rows={5} placeholder="A project, a question, an interesting problem…" value={message} onChange={(e) => setMessage(e.target.value)} /></label>

            {status === "error" && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="contact-submit rounded-full px-5 py-3 text-[10px] font-medium uppercase tracking-[.12em] transition-[transform,background-color] duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <Send size={14} />
            </button>
          </form>
        )}
        </div>
      </Reveal>
    </section>
  );
}
