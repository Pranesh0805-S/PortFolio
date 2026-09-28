import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranesh S. — Full-stack Developer & AI Builder",
  description:
    "Portfolio of Pranesh S, a full-stack developer and AI builder creating thoughtful software products with React, Node.js, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-bg text-ink"
      >
        <SmoothScroll>
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
