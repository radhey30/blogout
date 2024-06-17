import type { Metadata } from "next";

import "./globals.css";
import { cabin } from "./fonts";

export const metadata: Metadata = {
  title: "BlogOut",
  description: "Create beautiful blogs here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white px-16 py-10">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
