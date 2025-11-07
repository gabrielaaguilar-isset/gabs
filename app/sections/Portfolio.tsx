"use client";

import { useState } from "react";
import works from "../content/works.json";
import { t } from "i18next";
import TitleSection from "../components/common/TitleSection";
import Cards from "../components/common/Cards";
import Button from "../components/common/Button";

const Portfolio = () => {

    const worksArray = Object.values(works);
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };
    return (
        <section id="Porfolio" className="flex justify-center items-center flex-col">

            <TitleSection sectionName={t("portfolio.portfolio")} mainTitle={t("portfolio.FeaturedWork")} description={t("portfolio.FeaturedWorkDesc")} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 customMaxW mr-auto ml-auto">
                {worksArray.slice(0, visibleCount).map((work, index) => (
                    <Cards
                        key={index}
                        text={work.titulo}
                        workSrc={work.src}
                        workCard={true}
                        link={work.urlImg}
                    />
                ))}
            </div>
            {visibleCount < worksArray.length && (

                <Button onClick={handleLoadMore} title={t("portfolio.ViewMore")} secundary={true}
                    className="ml-auto mr-auto poniter mt-10" />
            )}
        </section>


    )
}

export default Portfolio;