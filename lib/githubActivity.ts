export type GitHubActivity = {
  id: string;
  repository: string;
  href: string;
  summary: string;
  date: string;
};

type GitHubEvent = {
  id?: string;
  type?: string;
  created_at?: string;
  repo?: { name?: string };
  payload?: { action?: string; ref_type?: string; commits?: unknown[]; issue?: { title?: string } };
};

function describeEvent(event: GitHubEvent) {
  switch (event.type) {
    case "PushEvent": return `Pushed ${event.payload?.commits?.length ?? "new"} update${event.payload?.commits?.length === 1 ? "" : "s"}`;
    case "CreateEvent": return `Created a ${event.payload?.ref_type ?? "project item"}`;
    case "PullRequestEvent": return `${event.payload?.action ?? "Updated"} a pull request`;
    case "IssuesEvent": return `${event.payload?.action ?? "Updated"} an issue${event.payload?.issue?.title ? `: ${event.payload.issue.title}` : ""}`;
    case "WatchEvent": return "Starred a repository";
    case "ForkEvent": return "Forked a repository";
    case "ReleaseEvent": return "Published a release";
    default: return null;
  }
}

export async function getRecentGitHubActivity(): Promise<GitHubActivity[]> {
  try {
    const response = await fetch("https://api.github.com/users/Pranesh0805-S/events/public?per_page=30", {
      headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2026-03-10" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(2500),
    });
    if (!response.ok) return [];
    const events = await response.json() as GitHubEvent[];
    return events.flatMap((event) => {
      const summary = describeEvent(event);
      const repository = event.repo?.name;
      if (!summary || !repository || !event.created_at) return [];
      return [{
        id: event.id ?? `${repository}-${event.created_at}`,
        repository,
        href: `https://github.com/${repository}`,
        summary,
        date: new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(new Date(event.created_at)),
      }];
    }).slice(0, 6);
  } catch {
    return [];
  }
}
