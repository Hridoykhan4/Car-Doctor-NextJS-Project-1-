import { Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuthSessionProvider from "./Providers/NextAuthSessionProvider";
import { Toaster } from "react-hot-toast";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Car Doctor App",
  description: "Car Servicing, Washing, Parts etc.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` ${rajdhani.variable} h-full antialiased`}
    >
      <body className={`${rajdhani.className} min-h-full flex flex-col`}>
        <NextAuthSessionProvider>
        <Toaster />
          <Navbar></Navbar>
          <main className="grow">{children}</main>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
