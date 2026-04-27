// app/layout.js
import "./globals.css"; // Ensure your Tailwind CSS is imported here

export const metadata = {
  title: "Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K",
  description: "Official Portal",
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