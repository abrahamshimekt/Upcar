import type { Metadata } from "next";
import "../globals.css";
import { Footer, Navbar } from "@/components";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Upcar",
  description: "Discover the best cars in the world",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`relative`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
