import BootstrapClient from "@/components/BootstrapClient";
import { AuthProvider } from "@/contexts/Auth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropTypes from "prop-types";
import "@/styles.scss";

export const metadata = {
  title: "PixelBirds",
  description: "Pixel Birds is a collection of 5202 adorable pixelated NFT birds, each with its own characteristic.",
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>
            {children}
          </main>
          <BootstrapClient />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
