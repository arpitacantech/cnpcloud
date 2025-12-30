import ComputeNavbar from "./components/ComputeNavbar";
import HeroCompute from "./components/HeroCompute";
// import DifferentiationSection from "./components/DifferentiationSection";
// import TextParallaxContentExample from "./components/text-parallax-content-scroll";
import AnimatedCard from "./components/AnimatedCard";
import Feature1 from "./components/Feature1";
import { Feature2 } from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Featured_05 from "./components/globe";
import Feature4 from "./components/Feature4";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ComparisonSection from "./components/ComparisonSection";
import FAQ1 from "./components/FAQ1";


export default function Home() {
  return (
   <>
    <ComputeNavbar />
    <HeroCompute />
    <AnimatedCard
      title="What Sets Cantech Cloud Compute Apart"
      description1="Cantech cloud offers cloud compute solutions that focus on performance, flexibility and security that ensures reliable operations while enabling scalable and efficient growth."
      // description2="Explore topics such as resource allocation, scaling, monitoring, and best practices."
      imageSrc="/call-to-action.webp"
      imageAlt="Virtual Machine Management"
    />
    <AnimatedCard
      title="Scalable and On-Demand Cloud Compute Solutions"
      description1="Deploy high performance cloud compute worldwide with flexible pricing, enterprise stability and effortless scalability across workloads."
      // description2="Explore topics such as resource allocation, scaling, monitoring, and best practices."
      imageSrc="/call-to-action.webp"
      imageAlt="Virtual Machine Management"
      reverse
    />
    <Feature1 />
    <Feature2 />
    <Feature3 />
    <Featured_05 />
    <Feature4 />
    {/* <DifferentiationSection /> */}
    {/* <TextParallaxContentExample /> */}
    <ComparisonSection />
    <FAQ1 />
    <CTASection />
    <Footer />
    </>
  );
}
