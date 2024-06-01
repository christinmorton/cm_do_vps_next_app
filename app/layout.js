import "./globals.css";


import SiteNavigation from "@/components/SiteNavigation";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import ModalWidget from "@/components/ModalWidget";
import { Suspense } from "react";

export const metadata = {
  title: "Christin Morton",
  description: "Christin Morton's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteNavigation />
        </Suspense>
        {children}
        <Footer />
        <Suspense fallback={<div>Loading...</div>}>
          <Modal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ModalWidget queryParam={'modalWidget'} />
        </Suspense>
      </body>
    </html>
  );
}
