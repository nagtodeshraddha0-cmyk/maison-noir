import Desserts from "@/components/sections/Desserts";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Instagram from "@/components/sections/Instagram";
import Interior from "@/components/sections/Interior";
import Location from "@/components/sections/Location";
import Navbar from "@/components/sections/Navbar";
import Reservation from "@/components/sections/Reservation";
import SignatureCoffee from "@/components/sections/SignatureCoffee";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <main className="bg-[#F7F3EE] text-[#2C2A29]">
  <Navbar />
  <Hero />
  <Story />
  <SignatureCoffee />
  <Desserts />
  <Interior />
  <Reservation />
  <Instagram />
  <Location />
  <Footer />
</main>
  );
}
