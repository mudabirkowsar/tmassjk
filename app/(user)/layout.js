import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavbar";

// ✅ Add metadata here
export const metadata = {
  title: "Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K",
  description:
    "Official platform of Tanzeem-ul-Madaris Ahle Sunnat Sufi Jammu & Kashmir, promoting Sufi education and modern learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Remove any custom overflow styles from body if they exist */}
      <body>
        <TopNavbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}