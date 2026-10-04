"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export default function NetworkStatus() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("offline", update);
    window.addEventListener("online", update);
    return () => {
      window.removeEventListener("offline", update);
      window.removeEventListener("online", update);
    };
  }, []);

  if (!offline) return null;
  return <div className="network-status" role="status" aria-live="polite"><WifiOff size={15} /> You&apos;re offline. Some live activity may not load.</div>;
}
