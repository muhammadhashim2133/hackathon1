import Hero from "@/views/Hero";
import Product from "@/views/Product";
import PromotionSection from "@/views/PromotionSection";
import Jewellery from "@/views/Jewellery";
import Subscribe from "@/views/Subscribe";
import Slickproducts from "@/views/Slickproducts";

export default function Home() {
  return (
    <>
      <Hero />
      <PromotionSection />
      <Slickproducts />

      <Jewellery />
      <Subscribe />
    </>
  );
}
