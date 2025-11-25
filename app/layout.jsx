
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from './components/SideBar'
import { Navbar } from './components/Navbar.jsx'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100 text-gray-900">
        <Sidebar />
        <div className="ml-64 w-full">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
