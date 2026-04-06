import LazySection from "../lazyload/LazySection";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import PartnerWithUs from "./pages/PartnerWithUs";
import Projects_Causes from "./pages/Projects_Causes";
import "./App.css";
import Goals from "./pages/Goals";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <main className="">
        <Navbar />
        <Home />

        <LazySection>
          <Projects_Causes />
        </LazySection>

        <LazySection>
          <Blogs />
        </LazySection>

        <LazySection>
          <Goals />
        </LazySection>

        <LazySection>
          <PartnerWithUs />
        </LazySection>
        <Footer />
      </main>
    </>
  );
}
