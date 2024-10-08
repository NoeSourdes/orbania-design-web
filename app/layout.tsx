import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const arimo = localFont({
  src: "./fonts/Arimo.ttf",
  variable: "--font-arimo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Orbania Design - Web",
  description: "Cabinet d'architecte et de design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={` ${arimo.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
