import type { Metadata } from "next";
import { Roboto_Flex, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Signal & Form | A Creative Studio for Custom Print and Design",
  description:
    "Signal & Form is a creative studio in Grapevine, TX, focused on custom signage and branding, the ideal creative studio for custom print and design.",
  metadataBase: new URL("https://signalandform.net"),
  openGraph: {
    title: "Signal & Form | A Creative Studio for Custom Print and Design",
    description:
      "Signal & Form is a creative studio in Grapevine, TX, focused on custom signage and branding.",
    url: "https://signalandform.net",
    siteName: "Signal & Form",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} ${playfair.variable} ${syne.variable} font-sans antialiased bg-base text-contrast`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
