import "../styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./FooterComponent";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <div className="max-sm:hidden hidden">
        <Footer />
      </div>
    </div>
  );
}
