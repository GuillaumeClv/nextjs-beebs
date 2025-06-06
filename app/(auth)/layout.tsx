export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return( 
        <section>
            <p>Auth layout</p>
            {children}
        </section>
    )
  }