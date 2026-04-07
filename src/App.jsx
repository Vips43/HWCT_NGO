import LazySection from "../lazyload/LazySection";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import PartnerWithUs from "./pages/PartnerWithUs";
import Projects from "./pages/Projects";
import "./App.css";
import Goals from "./pages/Goals";
import Footer from "./pages/Footer";
import Causes from "./pages/Causes";

export default function App() {
  return (
    <>
      <main className="">
        <Navbar />
        <Home />

        <LazySection>
          <Causes />
        </LazySection>
        
        <LazySection>
          <Projects />
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
