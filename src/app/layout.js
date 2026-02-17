import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Hotel Near Medanta – The Angel Hotel & Suites | Sector 38 Gurgaon",
  description: "Looking for a hotel near Medanta? The Angel Hotel & Suites offers comfortable, affordable medical stay just 3 minutes from Medanta – The Medicity in Sector 38, Gurgaon. Ideal for patients and families.",
  metadataBase: new URL("https://panacea-medcare-landing.vercel.app/"),
  keywords: "hotel near Medanta, medical stay Gurgaon, long stay near Medanta, Sector 38 hotel, budget hotel near Medanta",
  authors: [{ name: "The Angel Hotel & Suites" }],
  openGraph: {
    title: "Hotel Near Medanta – Just 3 Minutes Away",
    description: "Comfortable medical stay for patients & families near Medanta Hospital",
    type: "website",
    locale: "en_IN",
    siteName: "The Angel Hotel & Suites",
    url: "https://panacea-medcare-landing.vercel.app/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angel Hotel near Medanta Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Near Medanta – Just 3 Minutes Away",
    description: "Comfortable medical stay for patients & families near Medanta Hospital",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#066F89",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-medical-text antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
