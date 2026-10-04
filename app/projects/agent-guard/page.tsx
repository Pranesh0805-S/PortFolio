import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Guard Evaluation — Pranesh S.",
  description: "Evaluation results and limitations for Agent Guard, a tool access guard for AI agents.",
};

const controls = [
  { step: "01", title: "Domain allowlist", text: "Restricts which domains the agent can reach." },
  { step: "02", title: "Independent review", text: "A blind second-model reviewer checks a proposed action." },
  { step: "03", title: "Human approval", text: "A person can approve actions before they reach a tool." },
];

export default function AgentGuardCaseStudy() {
  return <main className="case-study-page">
    <header className="case-study-nav"><Link href="/#projects"><ArrowLeft size={15} /> Back to selected work</Link><span>CASE STUDY / 01</span></header>
    <section className="case-study-hero">
      <p className="case-study-kicker">AI SECURITY / NODE.JS · EXPRESS</p>
      <h1>Agent Guard</h1>
      <p className="case-study-lede">A guard layer between a tool-using AI agent and the tools it can access.</p>
      <a className="case-study-repo" href="https://github.com/Pranesh0805-S/Agent-Guard" target="_blank" rel="noopener noreferrer">View GitHub repository <ArrowUpRight size={15} /></a>
      <div className="case-study-result"><div><strong>6 / 20</strong><span>attacks succeeded without the guard</span></div><i>→</i><div><strong>0 / 20</strong><span>succeeded with the guard enabled</span></div></div>
      <p className="case-study-caveat">Final frozen-code Haiku 4.5 round. Harmless tasks completed 15/15 in both arms. These results describe this evaluation only, not a general security guarantee.</p>
    </section>
    <section className="case-study-section">
      <p className="case-study-label">01 / THE PROBLEM</p>
      <div><h2>Tool access creates a security boundary.</h2><p>Prompt injection can try to steer an AI agent into unsafe tool actions. Agent Guard explores checks between the model’s intent and the external action, so a request is not passed straight through by default.</p></div>
    </section>
    <section className="case-study-section case-study-architecture">
      <p className="case-study-label">02 / ARCHITECTURE</p>
      <div><h2>Put review between the agent and its tools.</h2><p className="case-study-flow">USER → AI AGENT → GUARD LAYER → TOOL</p><div className="case-study-controls">{controls.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
    </section>
    <section className="case-study-section">
      <p className="case-study-label">03 / BENCHMARK</p>
      <div><h2>A measurable result, with a defined scope.</h2><p>The final frozen-code Haiku 4.5 round recorded 6/20 successful autonomous attacks with the guard off and 0/20 with it on. In the guarded arm, 10/20 attacks were attempted; every attempt was a lookalike-domain email and the allowlist stopped it.</p><p>The same round completed 15/15 harmless tasks in both arms, with no errors or truncated runs. In an earlier layer check, allowlist plus taint rules completed 0/9 harmless tasks; the final blind-reviewer check completed 9/9 with none blocked.</p></div>
    </section>
    <section className="case-study-section case-study-decisions">
      <p className="case-study-label">04 / GENERALIZATION CHECK</p>
      <div><h2>Good results still need an honest test boundary.</h2><p>A starter set that was tuned on stopped 10/10 attacks and allowed 5/5 legitimate tasks. A second set, written after seeing the reviewer, stopped 5/5 attacks but allowed only 3/5 legitimate tasks. The summary reports no independently authored attack set yet, so the second set is not an independent holdout.</p><ul className="case-study-findings"><li>An outside-address email was held by the allowlist as designed.</li><li>“Delete the newsletter” was blocked because the reviewer was too strict.</li><li>The reviewer issued 33 denials, all on deletes plus one send.</li><li>The evaluation cost was about $0.60 for 70 runs.</li><li>Sonnet 5 attack runs were truncated in all 20 attempts and are excluded from valid results.</li></ul><p>The summary is a record of results from earlier sessions, not raw terminal output. Treat counts and costs as reported figures until checked against the original logs.</p></div>
    </section>
    <section className="case-study-section case-study-decisions">
      <p className="case-study-label">05 / TECHNICAL DECISIONS</p>
      <div><h2>Layered checks for tool calls.</h2><p>The implementation combines a domain allowlist, a blind second-model review, and a human approval queue. A real agent run queued the lookalike-domain send, and approve/deny actions were exercised in the local dashboard.</p><p>An address-parsing fix was added without changing the evaluation results. The summary records 21 tests passing afterward; these checks complement the benchmark but do not expand its attack sample.</p><div className="case-study-stack"><span>NODE.JS</span><span>EXPRESS</span><span>CLAUDE API</span></div></div>
    </section>
    <section className="case-study-next"><p>Want to inspect the implementation?</p><a href="https://github.com/Pranesh0805-S/Agent-Guard" target="_blank" rel="noopener noreferrer">Read the source <ArrowUpRight size={15} /></a></section>
  </main>;
}
