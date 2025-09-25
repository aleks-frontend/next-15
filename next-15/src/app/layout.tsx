import type { Metadata } from "next";
import type { ReactNode } from "react";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 15 App",
  description: "A Next.js 15 application with Tailwind CSS",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
