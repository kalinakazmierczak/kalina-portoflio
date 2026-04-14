import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalina | Software Developer",
  description: "Kalina's personal portfolio — software developer based in Toronto.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-cream text-soft-charcoal">
        {children}
      </body>
    </html>
  );
}
