"use client";

export default function BackToTop() {
  return <button className="footer-back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</button>;
}
