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
        title="Crown Estate Bangalore | Luxury Wedding & Event Venue on Airport Road"
        description="Crown Estate is a luxury 4-acre wedding and event venue on Airport Road, Bangalore. Host destination weddings, receptions, birthday celebrations, corporate events and weekend getaways with 20 AC rooms and spacious lawns."
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
