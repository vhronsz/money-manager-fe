export default function LoginLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="flex h-screen flex-col items-center justify-center">
        {children}
      </section>
    )
  }