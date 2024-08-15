import LogoGrid from "./components/ui/Logo_grid";
import HeroSection from "./components/ui/Hero";
import FeatureGrid from "./components/ui/Features/index";
import Footer from "./components/ui/Footer";
import SimpleNavbar from "./components/ui/SimpleNavbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-gradient bg-white">
      <SimpleNavbar />
      <main>
        <HeroSection />
        <LogoGrid />
        <FeatureGrid />
        <Footer />
      </main>
    </div>
  );
}
