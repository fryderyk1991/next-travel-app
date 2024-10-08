import type { Metadata } from "next";
import "./globals.css";
import { oswald } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Travel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>{children}</body>
    </html>
  );
}
