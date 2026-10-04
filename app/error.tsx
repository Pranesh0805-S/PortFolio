"use client";

import { ArrowLeft, RotateCw } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <main className="route-state error-state" role="alert">
    <span className="route-state-index">PRANESH S. / PORTFOLIO</span>
    <p className="route-state-code">CONNECTION INTERRUPTED</p>
    <h1>That didn’t<br /><em>load right.</em></h1>
    <p className="route-state-copy">The page may have hit a temporary problem. Try again, or return to the portfolio home.</p>
    <div className="route-state-actions"><button className="route-primary" type="button" onClick={() => retry()}><RotateCw size={15} /> Try again</button><Link className="route-secondary" href="/"><ArrowLeft size={15} /> Back home</Link></div>
  </main>;
}
