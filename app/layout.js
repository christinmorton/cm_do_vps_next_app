import SiteNavigation from "@/components/SiteNavigation";
import "./globals.css";
import Footer from "@/components/Footer";

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
      </body>
    </html>
  );
}
