import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-6">📚 Menu</h2>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Library" className="hover:underline">
            Library
          </Link>
        </li>
        <li>
          <Link href="/CSR" className="hover:underline">
            CSR
          </Link>
        </li>
        <li>
          <Link href="/SSR" className="hover:underline">
            SSR
          </Link>
        </li>
        <li>
          <Link href="/ISR" className="hover:underline">
            ISR
          </Link>
        </li>
      </ul>
    </aside>
  );
}
