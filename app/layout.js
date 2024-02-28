import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amarr Garage Door: Quality, Durable Doors for Your Home",
  description: "Upgrade your home with an Amarr Garage Door - trusted for their durability and quality. With a variety of styles & options, find the perfect fit for your home.p",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <meta charSet="UTF-8" />
      <body className={inter.className}>
        <Navbar />
        <div className="w-full h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}


// Meta Title
// Amarr Garage Door: Quality, Durable Doors for Your Home

// Meta Description
// Upgrade your home with an Amarr Garage Door - trusted for their durability and quality. With a variety of styles & options, find the perfect fit for your home.