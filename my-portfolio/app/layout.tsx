import './globals.css';

export const metadata = {
  title: "Vanessa Taylor – Portfolio",
  description: "Portfolio site of Vanessa Taylor, a software engineer and artist.",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">{children}</body>
    </html>
  )
}
