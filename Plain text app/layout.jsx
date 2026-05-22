export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
