export default function Noise() {
  const svg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>"
    );
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5,
        opacity: 0.04,
        pointerEvents: "none",
        backgroundImage: `url("${svg}")`,
      }}
    />
  );
}
