"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-300 text-white">
      <main className="flex-1 container mx-auto p-6">
        <div className="mb-6 w-full flex justify-center items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full max-w-md bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Type here..."
          />
        </div>
        <div className="flex justify-center items-center gap-6 mb-6">
          {navLinks.map((navLink) => {
            const isActive =
              pathName === navLink.href ||
              (pathName.startsWith(navLink.href) && navLink.href !== "/");

            return (
              <Link
                style={{
                  fontWeight: isActive ? "700" : "400",
                }}
                key={navLink.href}
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            );
          })}
        </div>
        {children}
      </main>
      <div
        style={{
          width: "100%",
          minHeight: "30px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        Auth footer
      </div>
    </div>
  );
}
