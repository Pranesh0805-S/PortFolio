export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-ink-dim sm:flex-row sm:px-10">
        <span>Â© {new Date().getFullYear()} Pranesh S. All rights reserved.</span>
        <div className="flex gap-5 font-mono">
          <a href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pranesh0805/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/pranesh0805-s/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan">
            LeetCode
          </a>
          <a href="mailto:pranesh8506s@gmail.com" className="hover:text-accent-cyan">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
