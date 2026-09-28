export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="flex flex-col items-center justify-between gap-4 px-6 text-xs sm:flex-row sm:px-10">
        <div className="footer-identity">
          <span className="footer-copyright">© {new Date().getFullYear()} Pranesh S.</span>
          <span className="footer-note">Thoughtfully built in Coimbatore, India.</span>
        </div>
        <div className="footer-links flex font-mono">
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
