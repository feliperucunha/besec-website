import { useState } from "react";
//* import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
//* import Components
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Clients from "./components/Clients";
import CtaSection from "./components/CtaSection";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import TalkToUsForm from "./components/TalkToUsForm";
import InstagramPublications from "./components/InstagramPublications";
import Testimonials from "./components/Testimonials";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Cookie from "./components/Cookie";
import { whatsappData } from "./data";

function App() {
  //* aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  const {
    accountName,
    statusMessage,
    chatMessage,
    phoneNumber,
    placeholder,
    avatar,
    message,
  } = whatsappData;
  return (
    <div className=" overflow-hidden">
      <Cookie />
      <a
        href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`}
        target="_blank"
      >
        <FloatingWhatsApp
          accountName={accountName}
          statusMessage={statusMessage}
          chatMessage={chatMessage}
          placeholder={placeholder}
          phoneNumber={phoneNumber}
          avatar={avatar}
          // Remove the line below to see the text box
          chatboxHeight="0"
        />
      </a>
      <Hero />
      <About />
      <Features />
      <Partners />
      <Clients />
      <InstagramPublications />
      <Testimonials />
      <TalkToUsForm />
      {/* <CtaSection /> */}
      <Footer />
    </div>
  );
}

export default App;
