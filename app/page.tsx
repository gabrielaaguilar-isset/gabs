'use client';
import Navbar from "./components/layout/Navbar";
import "./i18n";
import { useTranslation } from 'react-i18next';
import Banner from "./sections/Banner";
import Image from "next/image";
import AboutMe from "./sections/AboutMe";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/layout/Footer";

export default function Home() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <>
      <Navbar />
      <main className="flex flex-col md:gap-20 gap-12" >
        <Image
          src="/abstractDesign.svg"
          width={435}
          height={472}
          alt="imagen"
          className="absolute right-0 top-0" />

        <Banner />
         <Image
          src="/abstractDesign.svg"
          width={435}
          height={472}
          alt="imagen"
          className="absolute -left-8 bottom-32 rotate-[61deg] w-2xs md:w-[435px]" />

          <AboutMe />
          <Portfolio />
          <Testimonials />
          <Footer />
      </main>
    </>
  );
}
