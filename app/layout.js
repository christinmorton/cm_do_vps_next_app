import "./globals.css";


import SiteNavigation from "@/components/SiteNavigation";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export const metadata = {
  title: "Christin Morton",
  description: "Christin Morton's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteNavigation />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
