import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title:
    "DnyanuX | Premium Website Developer in Pune Maharashtra",

  description:
    "DnyanuX builds premium modern business websites, portfolio websites and ecommerce websites in Pune, Maharashtra and across India.",

  keywords: [
    "Modern Website Desing India",
    "Ecommerce Website Developer",
    "Business Website Developer Maharashtra",
    "Website Developer Pune",
    "Web Designer Pune",
    "Website Creator Maharashtra",
    "Business Website India",
    "वेबसाइट बनाने वाला",
    "बिजनेस वेबसाइट बनाने वाला",
    "व्यवसायासाठी वेबसाइट बनवणारा",
    "महाराष्ट्रातील वेबसाइट डेव्हलपर",
    "वेबसाइट डेव्हलपर पुणे",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}