import Navbar from "@/components/Navbar/navbar";
import Landing from "@/components/Landing/landing";
import Intro from "@/components/Intro/intro";
import Pricing from "@/components/Pricing/pricing";
import Favorites from "@/components/Favorites/favorites";
import FrequentFlyer from "@/components/FrequentFlyer/frequentFlyer";
import Blog from "@/components/Blog/blog";
import Footer from "@/components/Footer/footer";
import IntroWoman from "@/components/IntroWoman/introWoman";
import Products from "@/components/Products/products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Landing />
        <Intro />
        <IntroWoman />
        <Products />
        <Pricing />
        <Favorites />
        <FrequentFlyer />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
