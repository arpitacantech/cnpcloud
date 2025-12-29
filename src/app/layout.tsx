import type { Metadata } from "next";
import { Sora, Lexend } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
});
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Cloud Compute & PaaS Solutions in India | Cantech Cloud",
  description: "Run modern workloads on Cantech Cloud with reliable cloud compute and PaaS services. Flexible infrastructure, optimized performance, and cost control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
