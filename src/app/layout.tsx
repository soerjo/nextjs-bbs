import "./globals.css";
import type { Metadata } from "next";
import Favicon from "@/components/atoms/Favicon";

import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buana Bahari Samudera",
  description: "Company Buana Bahari Samudera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
