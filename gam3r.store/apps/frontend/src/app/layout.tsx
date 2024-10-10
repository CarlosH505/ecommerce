import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google'

const font = Montserrat({subsets: ['latin'],})



export const metadata: Metadata = {
  title: "ecommerce",
  description: "Projeto de ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={font.className} > {children}
      </body>
    </html>
  );
}
