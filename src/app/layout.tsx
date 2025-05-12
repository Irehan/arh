import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ali Rehan Haider | Front End Engineer",
  description: "Front End Engineer crafting accessible, pixel-perfect digital experiences for the web",
  openGraph: {
    title: "Ali Rehan Haider | Front End Engineer",
    description: "Front End Engineer crafting accessible, pixel-perfect digital experiences for the web",
    url: "https://www.alirehanhaider.com/",
    type: "website",
    images: [
      {
        url: "https://www.alirehanhaider.com/assets/preview-image.jpg", // Remove ?v=1 if image is stable
        width: 1200,
        height: 630,
        alt: "Ali Rehan Haider Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Rehan Haider | Front End Engineer",
    description: "Front End Engineer crafting accessible, pixel-perfect digital experiences for the web",
    images: ["https://www.alirehanhaider.com/assets/preview-image.jpg"], // Remove ? gó if image is stable
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