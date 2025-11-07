import { useTranslation } from "react-i18next";
import TitleSection from "../components/common/TitleSection"
import { t } from "i18next";
import ListItem from "../components/common/ListItem";
import Cards from "../components/common/Cards";
import Image from "next/image";
import TechnologiesSlider from "../components/common/TencologiesSlider";


const AboutMe = () => {

    const { i18n } = useTranslation();

    return (
        <section className="customMaxW ml-auto mr-auto" id="aboutMe">

            <TitleSection sectionName={t("AboutMe.AboutMe")} mainTitle={t("AboutMe.TransformingIdeas")} description={t("AboutMe.description")} />

            <h4 className=" mt-8 sm:text-xl text-lg">
                {t("AboutMe.why")}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-7 gap-7 justify-center items-center ">


                <div className="flex flex-col gap-4">
                    <ListItem title={t("AboutMe.strategic")} description={t("AboutMe.strategicDesc")} />
                    <ListItem title={t("AboutMe.Vision")} description={t("AboutMe.VisionDesc")} />
                    <ListItem title={t("AboutMe.Seo")} description={t("AboutMe.personalizedDesc")} />
                    <ListItem title={t("AboutMe.personalized")} description={t("AboutMe.personalizedDesc")} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 bg-[#1C1C1C] sm:p-12 p-5 rounded-3xl relative z-10 ">
                    <Image
                        src="/abstractDesign.svg"
                        width={435}
                        height={472}
                        alt="imagen"
                        className="absolute right-0 top-0 z-0" />
                    <Cards img="/work.svg" text={t("AboutMe.4years")} addClass="z-10" />
                    <Cards img="/work.svg" text={t("AboutMe.projects")} addClass="z-10" />
                    <Cards img="/work.svg" text={t("AboutMe.workwith")} addClass="col-span-1 sm:col-span-2" />
                </div>

            </div>
            <h4 className=" mt-6 sm:text-xl text-lg">
                {t("AboutMe.tecnologies")}
            </h4>
            <TechnologiesSlider />

        </section>

    )
}

export default AboutMe;