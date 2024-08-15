import { Open_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Shared/Footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Futures Devs",
  description:
    "Future Devs is online based learning platform, where students can learn their favorite topics and concepts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AntdRegistry>
          <Toaster
            closeButton
            duration={2000}
            richColors
            position="top-center"
          />
          <Navbar />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
