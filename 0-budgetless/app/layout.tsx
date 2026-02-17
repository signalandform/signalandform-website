import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Budgetless | Find what you forgot you're paying for",
  description:
    "Track your subscriptions, see annual costs, and get renewal reminders. Never forget what you're paying for.",
  metadataBase: new URL("https://budgetless.signalandform.net"),
  openGraph: {
    title: "Budgetless | Find what you forgot you're paying for",
    description:
      "Track your subscriptions, see annual costs, and get renewal reminders.",
    url: "https://budgetless.signalandform.net",
    siteName: "Budgetless",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
