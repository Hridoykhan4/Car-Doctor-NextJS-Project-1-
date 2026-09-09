import { Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <Navbar></Navbar>

        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
