"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export default function GitHubCalendarPanel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <div className="activity-calendar-wrap">
    {mounted ? <GitHubCalendar
      username="Pranesh0805-S"
      colorScheme="light"
      blockSize={12}
      blockMargin={4}
      fontSize={12}
      theme={{ light: ["#eceae5", "#ffd6c8", "#ffad91", "#f27650", "#d73c1b"], dark: ["#252525", "#66301f", "#a9472d", "#df5a35", "#ff8a67"] }}
      labels={{ totalCount: "{{count}} public contributions in the last year" }}
      errorMessage="Contribution activity is unavailable right now. You can still open the public GitHub profile."
    /> : <div className="calendar-skeleton" aria-label="Loading GitHub contribution calendar"><span /><span /><span /><span /><span /></div>}
  </div>;
}
