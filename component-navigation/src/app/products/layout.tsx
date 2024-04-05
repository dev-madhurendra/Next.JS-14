export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h1>Product Details</h1>      
      </body>
    </html>
  );
}
