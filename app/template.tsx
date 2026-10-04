import type { ReactNode } from "react";
import RouteEntrance from "@/components/ui/RouteEntrance";

export default function Template({ children }: { children: ReactNode }) {
  return <RouteEntrance>{children}</RouteEntrance>;
}
