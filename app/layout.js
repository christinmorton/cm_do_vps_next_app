import "./globals.css";

import { Suspense } from "react";

import SiteNavigation from "@/components/SiteNavigation";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import WebsiteServiceModal from "@/components/modals/WebsiteServiceModal";
import DevServiceModal from "@/components/modals/DevServiceModal";
import ConsultationServiceModal from "@/components/modals/ConsultationServiceModal";
import ContactFormModal from "@/components/modals/ContactFormModal";


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
          <WebsiteServiceModal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DevServiceModal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ConsultationServiceModal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactFormModal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactFormModal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Modal />
        </Suspense>
      </body>
    </html>
  );
}
