import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hilltop Truck Park | Food Truck Court | Justin, TX",
  description:
    "Hilltop Truck Park is a food truck court in Justin, TX. Enjoy great food, events, and community at 8356 Thompson Road.",
  metadataBase: new URL("https://hilltoptruckpark.signalandform.net"),
  openGraph: {
    title: "Hilltop Truck Park | Food Truck Court | Justin, TX",
    description:
      "Hilltop Truck Park is a food truck court in Justin, TX. Enjoy great food, events, and community.",
    url: "https://hilltoptruckpark.signalandform.net",
    siteName: "Hilltop Truck Park",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-base text-contrast`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
