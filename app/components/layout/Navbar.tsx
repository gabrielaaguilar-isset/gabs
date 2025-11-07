import Image from "next/image";
import LanguageSwitch from "../common/LanguageSwitch";
import NavbarItems from "../common/NavbarItems";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full customMaxW px-5 mt-5 sm:mt-12 z-50">
      <div className="flex justify-between items-center bg-[#1C1C1C] py-5 px-8 rounded-full border border-[#262626] w-full relative">
        <div>
          <Image src="/logo.svg" alt="logo" width={170} height={40} />
        </div>

        <div className="hidden md:flex gap-5">
          <NavbarItems  url="/#aboutMe"  title={t("menu.About")} />
          <NavbarItems url="/#Porfolio" title={t("menu.Portfolio")} />
          <NavbarItems url="/#Testimonials" title={t("menu.Testimonials")} />
          <NavbarItems url="#" title={t("menu.DonwloadCV")} />
        </div>

        <div className="hidden md:flex items-center">
          <LanguageSwitch />
        </div>

        <div
          className="md:hidden flex flex-col justify-center items-center gap-1 cursor-pointer w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[2px] w-6 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          ></span>
        </div>

        {menuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#1C1C1C] rounded-2xl flex flex-col items-center gap-5 py-6 border border-[#262626] md:hidden animate-fadeIn">
            <NavbarItems url="/#aboutMe" title={t("menu.About")} />
            <NavbarItems url="/#Porfolio" title={t("menu.Portfolio")} />
            <NavbarItems url="#" title={t("menu.Testimonials")} />
            <NavbarItems url="#" title={t("menu.DonwloadCV")} />

            <LanguageSwitch />
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;