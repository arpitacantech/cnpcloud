import Navbar from "../components/Navbar";
import { HeroAbout } from "./components/HeroAbout";
import AnimatedCard from "./components/AnimatedCard";
import TabSection from "./components/TabSection";
import Feature from "./components/Feature";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function about() {
  return (
  <>
    <Navbar />
    <HeroAbout />
     <AnimatedCard
          title="Who We Are"
          description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          // description2="Explore topics such as resource allocation, scaling, monitoring, and best practices."
          imageSrc="/call-to-action.webp"
          imageAlt="Virtual Machine Management"
        />
    <TabSection />
    <Feature />
    <CTASection />
    <Footer />
    
  </>
  );
}
