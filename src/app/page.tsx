import Image from "next/image";

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Morrow Studio home">
          <span className="wordmark-mark" aria-hidden="true">m</span>
          <span>morrow<span className="wordmark-period">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="/login">Sign in</a>
          <a className="nav-contact" href="mailto:hello@morrow.studio">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Independent creative studio</p>
          <h1>Make space<br />for <em>good</em> ideas.</h1>
          <p className="hero-description">
            Morrow is a small studio for thoughtful identities and digital
            experiences. We help good people make work that means something.
          </p>
          <a className="text-link" href="#work">
            Explore our work <span className="link-arrow" aria-hidden="true">↘</span>
          </a>
          <span className="hero-index" aria-hidden="true">01 / 03</span>
        </div>

        <figure className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1500&q=85"
            alt="Sculptural white architecture framed against a clear sky"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 45vw"
          />
          <figcaption className="image-caption">
            <span>Built with intention</span>
            <span>40° 42&apos; 46.2&quot; N</span>
          </figcaption>
          <span className="image-stamp" aria-hidden="true">M<br />—<br />01</span>
        </figure>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">A small studio, a wide lens</p>
          <h2>Good work has<br /><em>a point of view.</em></h2>
        </div>
        <p className="section-intro">
          From the first sketch to the final detail, we bring clarity and care
          to every part of the process.
        </p>
        <div className="service-list" id="approach">
          <div className="service-row">
            <span className="service-number">01</span>
            <h3>Identity</h3>
            <p>Strategy, naming, and visual systems built to feel unmistakably you.</p>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="service-row">
            <span className="service-number">02</span>
            <h3>Digital</h3>
            <p>Clear, considered websites that make every interaction count.</p>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="service-row">
            <span className="service-number">03</span>
            <h3>Direction</h3>
            <p>A steady creative partner from the first question to what comes next.</p>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark" aria-hidden="true">m</span>
          <span>morrow<span className="wordmark-period">.</span></span>
        </a>
        <p>Independent by nature. Open to good things.</p>
        <a className="footer-email" href="mailto:hello@morrow.studio">Say hello <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
