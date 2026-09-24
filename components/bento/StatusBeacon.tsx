export default function StatusBeacon({ label = "Available for opportunities" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm text-emerald-300">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      {label}
    </div>
  );
}