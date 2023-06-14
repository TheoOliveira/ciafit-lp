import "./App.css";
import Layout from "./layout/Layout";
import Hero from "./components/hero/Hero";
import SecondVideo from "./components/secondVideo/SecondVideo";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/features/Features";
import Benefits from "./components/benefits/Benefits";
import Testimonials from "./components/testimonials/Testimonials";
import Price from "./components/price/Price";
import About from "./components/about/About";
import ScrollDownBtn from "./components/ScrollDownBtn/ScrollDownBtn";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <ScrollDownBtn />
        <SecondVideo />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Price />
        <About />
      </Layout>
    </>
  );
}

export default App;
