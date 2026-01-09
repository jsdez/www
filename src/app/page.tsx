"use client";

import { useRef } from "react";
import About from "@/sections/about";
import Services from "@/sections/services";
import Header from "@/sections/header";
import Faq from "@/sections/faq";
// import Contact from "@/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onContactClick={scrollToContact} />
      <Services />
      <About />
      <Faq />
      {/* <section ref={contactRef}>
        <Contact />
      </section> */}
      <Footer />
    </>
  );
}
