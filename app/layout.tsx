import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranesh S — Developer & AI Builder",
  description:
    "Pranesh S is a full-stack developer and AI builder creating useful, thoughtfully crafted software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-bg text-ink`}
      >
        <SmoothScroll>
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
