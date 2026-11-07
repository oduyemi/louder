import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://louder-ivory-vercel.app";
const siteName = "Louder on the Rooftop";
const siteDescription =
  "We're outside! Louder on the Rooftop is a youth expression of worship, faith, fellowship and community. A missional community focused on obeying the Great Commission. Let's GO together!";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: "Louder on the Rooftop | We're Outside",
    template: "%s | Louder on the Rooftop",
  },

  description: siteDescription,

  category: "religion",

  alternates: {
    languages: {
      "en-NG": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName,
    title: "Louder on the Rooftop | We're Outside",
    description: siteDescription,
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Louder on the Rooftop | We're Outside",
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  appleWebApp: {
    capable: true,
    title: "Louder",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2265",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}