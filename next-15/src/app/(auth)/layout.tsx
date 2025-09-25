"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <html lang="en">
      <body>
        {navLinks.map((navLink) => {
          const isActive =
            pathName === navLink.href ||
            (pathName.startsWith(navLink.href) && navLink.href !== "/");

          return (
            <Link
              style={{
                fontWeight: isActive ? "700" : "400",
                marginRight: 10
              }}
              key={navLink.href}
              href={navLink.href}
            >
              {navLink.label}
            </Link>
          );
        })}
        {children}
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
      </body>
    </html>
  );
}
