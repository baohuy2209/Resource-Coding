import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Streaming in NextJS",
  description: "Authors Nguyen Bao Huy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
