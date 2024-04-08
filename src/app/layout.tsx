import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faucet",
  description: "Mazze Testnet Faucet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxygen.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
