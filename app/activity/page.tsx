import type { Metadata } from "next";
import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GitHubCalendarPanel from "@/components/sections/GitHubCalendarPanel";
import { getRecentGitHubActivity, getPublicRepositoryCount } from "@/lib/githubActivity";

export const metadata: Metadata = {
  title: "Coding Activity — Pranesh S.",
  description: "A view into Pranesh’s public GitHub contributions and problem-solving profile.",
};

export const revalidate = 3600;

export default async function ActivityPage() {
  const [activity, repositoryCount] = await Promise.all([getRecentGitHubActivity(), getPublicRepositoryCount()]);
  return <>
    <Navbar />
    <main className="editorial-page activity-page">
      <header className="editorial-hero">
        <p className="section-kicker">A WORKING LOG / CODING ACTIVITY</p>
        <h1>Show up.<br /><em>Keep building.</em></h1>
        <p className="editorial-lede">A small window into the public work and problem-solving practice that happens between finished projects.</p>
        <div className="editorial-count"><span>PUBLIC PROFILES</span><span>GITHUB · LEETCODE</span></div>
      </header>
      <section className="activity-grid">
        <Reveal className="activity-card activity-github">
          <div className="activity-card-heading"><span><Code2 size={17} /> GITHUB / LAST YEAR</span><a href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile"><ArrowUpRight size={17} /></a></div>
          <h2>Code in public.</h2>
          <p>Contribution rhythm across public repositories. {repositoryCount === null ? "Browse the profile for the current repository list." : `${repositoryCount} public repositories to explore.`}</p>
          <GitHubCalendarPanel />
          <a className="activity-card-link" href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer">Open GitHub profile <ArrowUpRight size={15} /></a>
          {repositoryCount !== null && <div className="activity-stat-strip"><strong>{repositoryCount}</strong><span>PUBLIC REPOSITORIES</span><a href="https://github.com/Pranesh0805-S?tab=repositories" target="_blank" rel="noopener noreferrer">Browse them <ArrowUpRight size={13} /></a></div>}
        </Reveal>
        <Reveal className="activity-card activity-leetcode" delay={.08}>
          <div className="activity-card-heading"><span><Trophy size={17} /> LEETCODE / PRACTICE</span><a href="https://leetcode.com/u/pranesh0805-s/" target="_blank" rel="noopener noreferrer" aria-label="Open LeetCode profile"><ArrowUpRight size={17} /></a></div>
          <div className="leetcode-visual" aria-hidden="true"><div className="leetcode-orbit orbit-one" /><div className="leetcode-orbit orbit-two" /><span>{"{}"}</span></div>
          <h2>Think it through.</h2>
          <p>A live window into problem-solving practice. Open the profile for current submissions, streaks, contest history, and solved-problem details.</p>
          <div className="leetcode-focus"><span>01 <b>Practice</b><small>Work through a problem</small></span><span>02 <b>Review</b><small>Learn from each attempt</small></span><span>03 <b>Progress</b><small>Follow the profile activity</small></span></div>
          <a className="activity-card-link" href="https://leetcode.com/u/pranesh0805-s/" target="_blank" rel="noopener noreferrer">Visit LeetCode profile <ArrowUpRight size={15} /></a>
        </Reveal>
      </section>
      <section className="activity-feed-section">
        <div className="activity-feed-heading"><div><p className="section-kicker">RECENT PUBLIC EVENTS</p><h2>A little of what’s moving.</h2></div><a href="https://github.com/Pranesh0805-S?tab=overview" target="_blank" rel="noopener noreferrer">See GitHub overview <ArrowUpRight size={15} /></a></div>
        {activity.length ? <div className="activity-feed">{activity.map((item) => <a className="activity-event" href={item.href} key={item.id} target="_blank" rel="noopener noreferrer"><span>{item.date}</span><p>{item.summary}<b>{item.repository}</b></p><ArrowUpRight size={15} /></a>)}</div> : <div className="activity-empty"><p>Recent public events couldn’t load just now.</p><a href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer">Open GitHub directly <ArrowUpRight size={15} /></a></div>}
        <p className="activity-source-note">Recent GitHub events are public-only and may take time to appear. LeetCode profile totals are linked directly so the numbers always come from your profile.</p>
      </section>
    </main>
    <Footer />
  </>;
}
