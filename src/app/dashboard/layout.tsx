export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return <div className="dashboard-shell">{children}</div>;
}