export default function Noise() {
  const svg = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
  );
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-[5] opacity-[0.04]" style={{ backgroundImage: `url("${svg}")` }} />;
}