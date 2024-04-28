import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Tierlist",
  description: "Public pokemon tierlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
