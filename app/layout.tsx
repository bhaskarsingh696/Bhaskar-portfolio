import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhaskar Singh — Software Engineer",
  description:
    "Bhaskar Singh is a Computer Science student and aspiring Software Engineer focused on building useful software, solving problems, and exploring backend and web development.",
  metadataBase: new URL("https://bhaskarsingh.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bhaskar Singh — Software Engineer",
    description:
      "A creative engineering portfolio for Bhaskar Singh, an aspiring backend and software engineer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaskar Singh — Software Engineer",
    description:
      "Building useful software, one system at a time.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
