import Navbar from "@/components/Navbar/navbar";
import Landing from "@/components/Landing/landing";
import Pricing from "@/components/Pricing/pricing";
import Favorites from "@/components/Favorites/favorites";
import FrequentFlyer from "@/components/FrequentFlyer/frequentFlyer";
import Blog from "@/components/Blog/blog";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Landing />
        <Pricing />
        <Favorites />
        <FrequentFlyer />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
