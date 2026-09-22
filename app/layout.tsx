import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
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
  title: "Pranesh S | Full Stack Developer",
  description:
    "A modern developer portfolio showcasing projects, skills, experience and interactive work by Pranesh S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#08080c" }}>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-bg text-ink`}
        style={{ backgroundColor: "#08080c" }}
      >
        {children}
      </body>
    </html>
  );
}
