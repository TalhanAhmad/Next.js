import { Suspense } from "react";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { SiteFooter } from "@/components/site-footer";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="dashboard-loading">Opening your workspace...</div>}>
      <AuthenticatedDashboard />
    </Suspense>
  );
}

async function AuthenticatedDashboard() {
  await connection();
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const name = session?.user?.name?.trim().split(" ")[0] || "there";

  async function logoutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <>
      <header className="dashboard-nav">
        <Link className="wordmark" href="/" aria-label="Morrow Studio home">
          <span className="wordmark-mark" aria-hidden="true">m</span>
          <span>morrow<span className="wordmark-period">.</span></span>
        </Link>
        <nav className="dashboard-nav-links" aria-label="Workspace navigation">
          <a className="dashboard-nav-active" href="#overview">Overview</a>
          <a href="#projects">Projects</a>
          <a href="#activity">Activity</a>
        </nav>
        <div className="dashboard-user">
          <span className="user-avatar" aria-hidden="true">{name.charAt(0).toUpperCase()}</span>
          <span className="dashboard-user-name">{session?.user?.name || session?.user?.email}</span>
          <form action={logoutAction}>
            <button className="signout-button" type="submit">Sign out</button>
          </form>
        </div>
      </header>

      <main className="dashboard-main" id="overview">
        <div className="dashboard-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Your workspace</p>
            <h1>Good morning, <em>{name}.</em></h1>
            <p className="dashboard-subtitle">A little clarity for everything you&apos;re moving forward.</p>
          </div>
          <a className="dashboard-new-link" href="mailto:hello@morrow.studio?subject=New%20project">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>

        <section className="dashboard-stats" aria-label="Workspace summary">
          <div className="dashboard-stat">
            <span className="stat-label">In motion</span>
            <strong>03</strong>
            <span className="stat-note">active projects</span>
          </div>
          <div className="dashboard-stat">
            <span className="stat-label">Up next</span>
            <strong>02</strong>
            <span className="stat-note">open decisions</span>
          </div>
          <div className="dashboard-stat stat-featured">
            <span className="stat-label">Studio note</span>
            <strong>Make room<br />for the good.</strong>
            <span className="stat-note">A thought to take into the week</span>
          </div>
        </section>

        <section className="dashboard-projects" id="projects">
          <div className="dashboard-section-heading">
            <div>
              <p className="eyebrow">The work in progress</p>
              <h2>Projects</h2>
            </div>
            <a className="subtle-link" href="mailto:hello@morrow.studio?subject=Project%20enquiry">View all <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-table">
            <div className="project-row project-header" aria-hidden="true">
              <span>Project</span><span>Type</span><span>Stage</span><span>Updated</span>
            </div>
            <div className="project-row">
              <span className="project-name"><span className="project-mark project-mark-coral">a</span> Alder House</span>
              <span className="project-type">Identity</span>
              <span className="project-stage"><i className="stage-dot stage-dot-coral" /> Direction</span>
              <span className="project-date">Today</span>
            </div>
            <div className="project-row">
              <span className="project-name"><span className="project-mark project-mark-green">n</span> Northline</span>
              <span className="project-type">Digital</span>
              <span className="project-stage"><i className="stage-dot stage-dot-green" /> In progress</span>
              <span className="project-date">Yesterday</span>
            </div>
            <div className="project-row">
              <span className="project-name"><span className="project-mark project-mark-blue">f</span> Fieldnotes</span>
              <span className="project-type">Strategy</span>
              <span className="project-stage"><i className="stage-dot stage-dot-blue" /> Discovery</span>
              <span className="project-date">Oct 12</span>
            </div>
          </div>
        </section>

        <section className="dashboard-bottom" id="activity">
          <div className="dashboard-bottom-copy">
            <p className="eyebrow">A good place to begin</p>
            <h2>What would you<br /><em>like to make?</em></h2>
          </div>
          <div className="dashboard-bottom-action">
            <p>Tell us what you&apos;re thinking. We&apos;ll help shape the next step.</p>
            <a className="text-link" href="mailto:hello@morrow.studio?subject=Let%E2%80%99s%20make%20something">
              Start a conversation <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}