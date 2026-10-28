import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CSM | Critical & Strategy Minerals",
    template: "%s | CSM"
  },
  description:
    "Critical & Strategy Minerals Private Limited — connecting critical materials with India's strategic industrial future.",
  applicationName: "CSM",
  openGraph: {
    title: "CSM | Critical & Strategy Minerals",
    description:
      "Critical materials for clean energy, advanced manufacturing and the digital economy.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MouseSpotlight />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}