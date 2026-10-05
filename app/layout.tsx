import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import LiquidCursor from "@/components/ui/LiquidCursor";
import NetworkStatus from "@/components/ui/NetworkStatus";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Pranesh S. — Full-stack Developer",
  description:
    "Pranesh S. is a full-stack developer in Coimbatore, India, building useful web products and practical AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.theme=localStorage.getItem('pranesh-theme')==='blue'?'blue':'orange'}catch{}" }} />
      </head>
      <body
        className="antialiased bg-bg text-ink"
      >
        <ThemeProvider>
          <SmoothScroll>
            <div className="relative z-10">{children}</div>
            <LiquidCursor />
            <NetworkStatus />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
