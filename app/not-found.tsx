import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <main className="route-state not-found-state">
    <span className="route-state-index">PRANESH S. / PORTFOLIO</span>
    <p className="route-state-code">404 <i /> LOST IN THE ROUTES</p>
    <h1>This page went<br /><em>off the map.</em></h1>
    <p className="route-state-copy">The address may have moved, or the link may be out of date. Let’s get you back to something useful.</p>
    <div className="route-state-actions"><Link className="route-primary" href="/"><ArrowLeft size={15} /> Back home</Link><Link className="route-secondary" href="/work">Explore the projects <ArrowUpRight size={15} /></Link></div>
  </main>;
}
