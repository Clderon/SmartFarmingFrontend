// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Smart Farming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
