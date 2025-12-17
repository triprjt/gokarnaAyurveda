import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// app/layout.tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ayurveda Gokarna - Holistic Healing & Wellness Retreat in Karnataka, India",
    template: "%s | Ayurveda Gokarna",
  },
  description: "Experience authentic Ayurvedic healing at Ayurveda Gokarna, a holistic wellness retreat in Gokarna, Karnataka. Discover Panchakarma therapy, yoga, meditation, and traditional healing practices in a serene natural setting.",
  keywords: [
    "Ayurveda",
    "Gokarna",
    "Ayurvedic retreat",
    "wellness center",
    "Panchakarma",
    "yoga retreat",
    "meditation",
    "holistic healing",
    "Karnataka",
    "India",
    "Ayurvedic therapy",
    "wellness",
    "healing center",
    "spiritual retreat",
    "Ayurvedic treatments",
  ],
  authors: [{ name: "Ayurveda Gokarna" }],
  creator: "Ayurveda Gokarna",
  publisher: "Ayurveda Gokarna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ayurvedagokarna.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Ayurveda Gokarna',
    title: 'Ayurveda Gokarna - Holistic Healing & Wellness Retreat',
    description: 'Experience authentic Ayurvedic healing at Ayurveda Gokarna, a holistic wellness retreat in Gokarna, Karnataka. Discover Panchakarma therapy, yoga, meditation, and traditional healing practices.',
    images: [
      {
        url: '/ayurvedaLogo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ayurveda Gokarna - Holistic Healing Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayurveda Gokarna - Holistic Healing & Wellness Retreat',
    description: 'Experience authentic Ayurvedic healing at Ayurveda Gokarna, a holistic wellness retreat in Gokarna, Karnataka.',
    images: ['/ayurvedaLogo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'health',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
