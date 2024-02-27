import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amarr Garage Door: Quality, Durable Doors for Your Home",
  description: "Upgrade your home with an Amarr Garage Door - trusted for their durability and quality. With a variety of styles & options, find the perfect fit for your home.p",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full h-16"></div>
        {children}
      </body>
    </html>
  );
}


// Meta Title
// Amarr Garage Door: Quality, Durable Doors for Your Home

// Meta Description
// Upgrade your home with an Amarr Garage Door - trusted for their durability and quality. With a variety of styles & options, find the perfect fit for your home.