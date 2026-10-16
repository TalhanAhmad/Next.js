import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="project-footer">
      <div className="project-footer-main">
        <div className="project-footer-brand">
          <Link className="wordmark footer-wordmark" href="/" aria-label="Morrow Studio home">
            <span className="wordmark-mark" aria-hidden="true">m</span>
            <span>morrow<span className="wordmark-period">.</span></span>
          </Link>
          <p className="project-footer-note">
            Independent creative studio for thoughtful identities and digital experiences.
          </p>
        </div>

        <div className="project-footer-invite">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s make<br /><em>room for it.</em></h2>
          <a className="project-footer-cta" href="mailto:hello@morrow.studio">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <nav className="project-footer-links" aria-label="Footer navigation">
          <div>
            <span className="project-footer-label">Explore</span>
            <Link href="/#work">Selected work</Link>
            <Link href="/#approach">Our approach</Link>
            <Link href="/login">Studio sign in</Link>
          </div>
          <div>
            <span className="project-footer-label">Say hello</span>
            <a href="mailto:hello@morrow.studio">hello@morrow.studio</a>
            <span className="project-footer-note">Good work starts with a conversation.</span>
          </div>
        </nav>
      </div>

      <div className="project-footer-bottom">
        <span>© 2026 Morrow Studio</span>
        <span>Independent by nature. Open to good things.</span>
        <Link href="/#top">Back to top <span aria-hidden="true">↑</span></Link>
      </div>
    </footer>
  );
}