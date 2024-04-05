export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h1>Inner layout</h1>
      </body>
    </html>
  );
}
