import "./globals.css";

import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Christin Morton",
  description: "Christin Morton's personal website",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
