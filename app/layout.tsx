import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const LexendFont = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Gabriela Aguilar - Frontend Developer",
  description: "I’m Gabriela Aguilar, a passionate Frontend Developer with over 4 years of experience building fast, optimized, and visually engaging websites. I combine creativity, research, and technical precision to deliver digital solutions that truly represent each brand.",
   icons: {
    icon: "/favicon.svg", // Ruta desde /public o /app
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LexendFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
