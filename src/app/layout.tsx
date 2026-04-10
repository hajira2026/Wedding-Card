import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Galaxy Printers | Luxury Wedding Invitations - Mysore",
  description: "Premium luxury wedding invitations crafted in Mysore. Not just invitations — a first impression of your wedding. Royal, Hindu, Muslim, Christian & Modern wedding cards.",
  keywords: ["Galaxy Printers", "Wedding Invitations", "Mysore", "Luxury Cards", "Indian Wedding Cards", "Royal Invitations"],
  authors: [{ name: "Galaxy Printers" }],
  icons: {
    icon: "/images/logo-galaxy.png",
  },
  openGraph: {
    title: "Galaxy Printers | Luxury Wedding Invitations",
    description: "Premium luxury wedding invitations crafted in Mysore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased bg-luxury-black text-foreground font-inter`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
