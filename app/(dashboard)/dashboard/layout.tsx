export default function DashboardLayout({
    children,
    users,
    revenue,
    other
  }: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    other: React.ReactNode,

  }) {
    return( 
        <section>
            <p>Dashboard layout</p>
            {children}
            {users}
            {revenue}
            {other}
        </section>
    )
  }