// src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify desired weights
});

export const metadata: Metadata = {
  title: "Project Archive | Ali Rehan Haider",
  description: "Explore the full archive of projects by Ali Rehan Haider, Front End Engineer.",
  openGraph: {
    title: "Project Archive | Ali Rehan Haider",
    description: "Explore the full archive of projects by Ali Rehan Haider, Front End Engineer.",
    url: "https://www.alirehanhaider.com/archive",
    type: "website",
    images: [
      {
        url: "https://www.alirehanhaider.com/assets/archive-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Project Archive Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive | Ali Rehan Haider",
    description: "Explore the full archive of projects by Ali Rehan Haider, Front End Engineer.",
    images: ["https://www.alirehanhaider.com/assets/archive-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}