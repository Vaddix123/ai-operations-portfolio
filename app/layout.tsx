import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaddix123.github.io/ai-operations-portfolio/"),
  title: "Branden Opauski | Merchant Risk and AI Operations",
  description:
    "Merchant underwriting, AI workflow design, product operations, controls, and structured testing.",
  openGraph: {
    title: "Branden Opauski | Merchant Risk × AI Operations",
    description:
      "Senior merchant underwriting combined with owner-directed AI workflows, controls, and product operations.",
    type: "website",
    images: [{ url: "/ai-operations-portfolio/og.png", width: 1200, height: 630, alt: "Branden Opauski - Merchant Risk × AI Operations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branden Opauski | Merchant Risk × AI Operations",
    description:
      "Senior merchant underwriting combined with owner-directed AI workflows, controls, and product operations.",
    images: ["/ai-operations-portfolio/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
