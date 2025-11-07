import Image from "next/image";
import NavbarItems from "../common/NavbarItems";
import { t } from "i18next";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#1C1C1C] w-full">
            <div className="flex flex-col p-10 sm:p-12 gap-5 sm:gap-12 customMaxW mr-auto ml-auto">
                <div className="flex flex-col gap-12 justify-center items-center">
                    <Image src="/logo.svg" alt="logo" width={204} height={40} />

                    <div className="flex gap-5 justify-center items-center flex-wrap">
                        <NavbarItems url="/#aboutMe" title={t("menu.About")} />
                        <NavbarItems url="/#Porfolio" title={t("menu.Portfolio")} />
                        <NavbarItems url="/#Testimonials" title={t("menu.Testimonials")} />
                        <NavbarItems url="#" title={t("menu.DonwloadCV")} />
                    </div>
                </div>
                <hr className="text-[#393939] " />

                <div className="bg-[#1A1A1A] p-4 flex justify-between rounded-full items-center">
                    <Link href="https://www.linkedin.com/in/gabriela-aguilar01/" target="_blank">
                        <Image src="/linkedin.svg" alt="Linkedin logo" width={52} height={52}/>
                    </Link>

                    <h2 className="text-[#B3B3B3] font-light sm:text-md text-sm">
                        Gabriela Aguilar © All Rights Reserved
                    </h2>
                </div>
            </div>

        </div>
    )
}
export default Footer;