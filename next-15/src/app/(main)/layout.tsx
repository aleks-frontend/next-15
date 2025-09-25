import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300 text-white">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold hover:text-blue-200 transition-colors duration-200"
          >
            <span className="text-3xl">🏠</span>
            <span>My Next.js App</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 p-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} My Next.js App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
