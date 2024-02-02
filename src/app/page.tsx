import Navbar from "@/components/Navbar/navbar";
import Landing from "@/components/Landing/landing";
import Intro from "@/components/Intro/intro";
import Pricing from "@/components/FrequentFlyer/frequentFlyer";
import Favorites from "@/components/Favorites/favorites";
import Blog from "@/components/Blog/blog";
import Footer from "@/components/Footer/footer";
import IntroWoman from "@/components/IntroWoman/introWoman";
import Products from "@/components/Products/products";
import CallToAction from "@/components/CallToAction/callToAction";
import FrequentFlyer from "@/components/FrequentFlyer/frequentFlyer";
import Plans from "@/components/Plans/plans";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Landing />
        <Intro />
        <IntroWoman />
        <Products />
        <FrequentFlyer />
        <Plans />
        <CallToAction />
        <Favorites />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
