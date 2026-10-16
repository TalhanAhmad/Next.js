import { Suspense } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { LoginForm } from "./login-form";

type LoginPageProps = {
  searchParams: Promise<{ registered?: string }>;
};

async function RegistrationNotice({ searchParams }: LoginPageProps) {
  const { registered } = await searchParams;

  if (registered !== "1") {
    return null;
  }

  return <p className="form-success" role="status">Account created. You can sign in now.</p>;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <main className="auth-page site-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Morrow Studio home">
          <span className="wordmark-mark" aria-hidden="true">m</span>
          <span>morrow<span className="wordmark-period">.</span></span>
        </Link>
        <Link className="auth-back-link" href="/">Back to studio <span aria-hidden="true">↗</span></Link>
      </nav>
      <section className="auth-content">
        <div className="auth-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Morrow workspace</p>
          <h1>Good to have<br /><em>you back.</em></h1>
          <p>Sign in to pick up where your next good idea left off.</p>
        </div>
        <div className="auth-form-panel">
          <h2>Sign in</h2>
          <p className="auth-form-intro">Your workspace is right where you left it.</p>
          <Suspense fallback={null}>
            <RegistrationNotice searchParams={searchParams} />
          </Suspense>
          <LoginForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}