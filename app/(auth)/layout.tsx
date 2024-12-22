import Image from "next/image";
import { ReactNode } from "react";
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image src="/hero.png" alt="bg" fill className="size-full" />
      </div>
      {children}
    </main>
  );
}
