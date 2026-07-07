
import Loader from "@/components/Loader";
import Cursor from "@/components/motion/Cursor";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maison-noir-phi.vercel.app"),

  title: {
    default: "Maison Noir | Luxury Café Experience",
    template: "%s | Maison Noir",
  },

  description:
    "Maison Noir is a premium café experience where exceptional coffee, timeless interiors, and refined hospitality come together.",

  keywords: [
    "Luxury Café",
    "Premium Coffee",
    "Maison Noir",
    "Coffee Shop",
    "Luxury Interior",
    "Specialty Coffee",
    "AUREX Studio",
  ],

  authors: [{ name: "AUREX Studio" }],
  creator: "AUREX Studio",
  publisher: "AUREX Studio",
  authors: [{ name: "AUREX Studio" }],
  creator: "AUREX Studio",
  publisher: "AUREX Studio",
  
  themeColor: "#F7F3EE",
  
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
  openGraph: {
    title: "Maison Noir | Luxury Café Experience",
    description:
      "A premium café experience where exceptional coffee, timeless interiors, and refined hospitality come together.",
    url: "https://maison-noir-phi.vercel.app",
    siteName: "Maison Noir",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Noir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Maison Noir | Luxury Café Experience",
    description:
      "A premium café experience where exceptional coffee, timeless interiors, and refined hospitality come together.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body>
  <Loader />
  <Cursor />

    {children}
 
</body>
    </html>
  );
}
// <Cursor />