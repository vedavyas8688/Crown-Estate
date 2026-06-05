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
import Seo from "../components/Seo";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Luxury Wedding & Event Venue in Bangalore | Crown Estate"
        description="Discover Crown Estate, a luxury wedding and event venue in Bangalore offering elegant spaces for weddings, receptions, corporate events, weekend getaways, and special celebrations."
        keywords="Luxury Wedding & Event Venue in Bangalore"
      />
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
