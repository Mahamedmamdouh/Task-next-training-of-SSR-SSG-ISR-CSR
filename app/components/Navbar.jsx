import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">Library Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/Library">Library</Link>
        <Link href="/CSR">CSR</Link>
        <Link href="/SSR">SSR</Link>
        <Link href="/ISR">ISR</Link>
      </div>
    </nav>
  );
}
