import Image from "next/image";
import TitleBanner from "../components/common/TItleBanner";
import Button from "../components/common/Button";
import { t } from "i18next";

const Banner = () => {

    return (
        <section className="relative min-h-[700px] banner-bg overflow-hidden flex justify-center items-center sm:-mt-12 flex-col" >

            <div className="customMaxW mt-20">
                <TitleBanner />
                <div className="flex gap-9 justify-center items-center mt-8 ">
                    <Image src="/webApps.png" alt="web apps" width={74} height={74} />
                    <Image src="/webDesing.png" alt="web apps" width={74} height={74} />
                </div>
                <div className="flex gap-4 justify-center items-center mt-8">
                    <Button url="https://api.whatsapp.com/send/?phone=573133207188&text&type=phone_number&app_absent=0" title={t("banner.StartYourProject")} targetBlank/>
                    <Button url="/#Porfolio" title={t("banner.ViewMyWork")}  secundary={true} />

                </div>
            </div>

        </section >

    )
}

export default Banner;