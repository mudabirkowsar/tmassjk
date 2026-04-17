import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Add metadata here
export const metadata = {
  title: "Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K",
  description:
    "Official platform of Tanzeem-ul-Madaris Ahle Sunnat Sufi Jammu & Kashmir, promoting Sufi education and modern learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}