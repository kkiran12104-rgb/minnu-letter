export const metadata = {
  title: "Minnu Letter",
  description: "A special message for Minnu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
