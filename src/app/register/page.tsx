import { Suspense } from "react";
import Link from "next/link";
import { registerAction } from "./actions";

type RegisterPageProps = {
  searchParams: Promise<{ error?: string }>;
};

async function RegistrationError({ searchParams }: RegisterPageProps) {
  const { error } = await searchParams;

  if (!error) {
    return null;
  }

  return (
    <p className="form-error" role="alert">
      {error === "exists"
        ? "An account already exists for that email."
        : "Enter a valid email and a password of at least 8 characters."}
    </p>
  );
}

export default function RegisterPage({ searchParams }: RegisterPageProps) {
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
          <h1>A little room<br />for <em>what&apos;s next.</em></h1>
          <p>Create your account to keep your projects and ideas together.</p>
        </div>
        <div className="auth-form-panel">
          <h2>Create account</h2>
          <p className="auth-form-intro">A few details, then you&apos;re in.</p>
          <Suspense fallback={null}>
            <RegistrationError searchParams={searchParams} />
          </Suspense>
          <form action={registerAction} className="auth-form">
            <label className="form-field">
              <span>Name <span className="field-optional">Optional</span></span>
              <input autoComplete="name" maxLength={80} name="name" placeholder="Your name" />
            </label>
            <label className="form-field">
              <span>Email address</span>
              <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
            </label>
            <label className="form-field">
              <span>Password</span>
              <input autoComplete="new-password" minLength={8} maxLength={128} name="password" placeholder="At least 8 characters" required type="password" />
            </label>
            <button className="form-submit" type="submit">
              Create account <span aria-hidden="true">↗</span>
            </button>
            <p className="form-note">
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </section>
      <footer className="auth-footer">
        <span>Independent by nature.</span>
        <span>© Morrow Studio</span>
      </footer>
    </main>
  );
}