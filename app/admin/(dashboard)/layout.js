import "../../globals.css";
import Sidebar from "./components/Sidebar";
import AuthProvider from "./components/AuthProvider"; // We will create this

export const metadata = {
    title: "Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K",
    description:
        "Official platform of Tanzeem-ul-Madaris Ahle Sunnat Sufi Jammu & Kashmir, promoting Sufi education and modern learning.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <div className="flex">
                        <Sidebar />
                        <main className="flex-1 bg-slate-50 min-h-screen p-8">
                            {children}
                        </main>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}