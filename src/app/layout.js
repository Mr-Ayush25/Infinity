import "./globals.css";
import AuthProvider from "@/components/auth/AuthProvider";
import Navbar from "@/components/navbar/Navbar";
import BottomNav from "@/components/navbar/BottomNav";
import { EdgeStoreProvider } from "@/lib/edgeStore";

export const metadata = {
  title: "Infinity",
  description:
    "A personal Showcase Page that describe our work and some blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scroll-smooth scrollbar-thumb-slate-400 scrollbar-thumb-rounded-md scrollbar-track-white-200">
        <AuthProvider>
          <EdgeStoreProvider>
            <Navbar />
            {children}
            <BottomNav />
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
