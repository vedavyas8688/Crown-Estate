import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Services from "../components/Services";
import PostcardAbout from "../components/PostcardAbout";
import Galleries from "../components/Galleries";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import PostcardContact from "../components/PostcardContact";
import Pricing from "../components/Pricing";
import { pricingPackages } from "../data/content";  

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <Services />
      <Galleries />
      <Pricing packages={pricingPackages} />
      <PostcardAbout />
      <Testimonials />
      <Portfolio />
      <PostcardContact />
    </>
  );
}