"use client";

import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Paragraph from "./Paragraph";

const TitleBanner = () => {
    const { i18n } = useTranslation();

    const lang = i18n.language;

    const imageSrc = lang === "en" ? "/iam.svg" : "/soy.svg";

    return (
        <div className=" sm:mt-16">
            <Image
                src={imageSrc}
                width={40}
                height={40}
                alt={lang === "es" ? "Soy" : "I am"}
                className="md:-ml-2 ml-3"
            />
            <h1 className="text-3xl sm:text-6xl text-center -mt-3.5 font-medium ">Gabriela Aguilar -<br /> <span className="bg-gradient-to-r from-white to-[#5D4FB6] bg-clip-text text-transparent">Frontend Developer</span> </h1>
        
            <Paragraph text={t("banner.subtitle")} addClass="max-w-[625px] mt-6" />


        </div>

    );
};

export default TitleBanner;
