"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex items-center gap-2 bg-[#1C1C1C] px-1 py-2 rounded-full border border-[#262626]">
     
      <button
        onClick={() => changeLanguage("es")}
        className={`px-4 py-1.5 rounded-full transition-all duration-300 animacionSwitch text-md ${
          language === "es"
            ? "mainPurple text-white shadow-md"
            : "text-white hover:text-[#5D4FB6]"
        }`}
      >
        Español
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-1.5 rounded-full transition-all duration-300 animacionSwitch text-md ${
          language === "en"
            ? "mainPurple text-white shadow-md"
            : "text-white hover:text-[#5D4FB6]"
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitch;
