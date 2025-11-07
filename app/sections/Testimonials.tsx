"use client";
import { useState, useEffect, useCallback } from "react";
import testimoniosData from "../content/testimonials.json";
import TestimonioItem from "../components/common/TestimonioItem";
import Image from "next/image";
import TitleSection from "../components/common/TitleSection";
import { t } from "i18next";

const Testimonials = () => {
    const testimonios = Object.values(testimoniosData);
    const total = testimonios.length;
    const [current, setCurrent] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [isHovering, setIsHovering] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);

    // Mover handleNext aquí para que esté disponible en el useEffect
    const handleNext = useCallback(() => {
        setCurrent((prev) => (prev >= total - itemsPerView ? 0 : prev + 1));
    }, [total, itemsPerView]);

    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth < 768) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    useEffect(() => {
        if (isHovering || isInteracting) return;
        
        const interval = setInterval(() => handleNext(), 5000);
        return () => clearInterval(interval);
    }, [isHovering, isInteracting, handleNext]);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? total - itemsPerView : prev - 1));
    };

    const getItemWidth = () => {
        if (itemsPerView === 3) {
            return `calc((100% - 160px) / 3)`; 
        } else if (itemsPerView === 2) {
            return `calc((100% - 40px) / 2)`; 
        } else {
            return "100%"; 
        }
    };

    const getTransform = () => {
        // SOLUCIÓN 1: Usar el cálculo original pero protegido con typeof window
        if (typeof window !== "undefined") {
            if (itemsPerView === 3) {
                const itemWidthWithGap = 100 / 3;
                const gapPercentage = (80 / (window.innerWidth * 0.8)) * 100;
                const slideWidth = itemWidthWithGap + (gapPercentage / 3);
                return `translateX(-${current * slideWidth}%)`;
            } else if (itemsPerView === 2) {
                const itemWidthWithGap = 100 / 2; 
                const gapPercentage = (40 / (window.innerWidth * 0.8)) * 100;
                const slideWidth = itemWidthWithGap + (gapPercentage / 2);
                return `translateX(-${current * slideWidth}%)`;
            } else {
                return `translateX(-${current * 100}%)`;
            }
        }
        return `translateX(-${current * 100}%)`; // Fallback para SSR
    };

    const getOpacity = (index: number) => {
        if (itemsPerView === 1) {
            return index === current ? 1 : 0.3;
        } else if (itemsPerView === 2) {
            return (index === current || index === current + 1) ? 1 : 0.3;
        } else {
            return (index >= current && index < current + itemsPerView) ? 1 : 0.3;
        }
    };

    return (
        <section className="customMaxW mr-auto ml-auto " id="Testimonials">
            <TitleSection 
                sectionName={t("Testimonials.Testimonials")} 
                mainTitle={t("Testimonials.PeopleSay")} 
                description={t("Testimonials.PeopleSayDesc")} 
            />

            <div className="relative w-full overflow-hidden mt-14">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-0 sm:w-30 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-20"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-0 sm:w-30 bg-gradient-to-l from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-20"></div>

                <div className="relative flex items-center justify-center">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0  z-30 p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <Image src="/left.svg" alt="left" width={32} height={32} className="sm:w-14 sm:h-14" />
                    </button>

                    <div 
                        className="overflow-hidden relative z-10 "
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        // SOLUCIÓN 2: Agregar interacción táctil
                        onTouchStart={() => setIsInteracting(true)}
                        onTouchEnd={() => setTimeout(() => setIsInteracting(false), 3000)}
                    >
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: getTransform(),
                                gap: itemsPerView === 3 ? '80px' : itemsPerView === 2 ? '40px' : '0px',
                            }}
                        >
                            {testimonios.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 text-white transition-all duration-700"
                                    style={{
                                        width: getItemWidth(),
                                        opacity: getOpacity(index),
                                    }}
                                >
                                    <div className="bg-[#222222] rounded-2xl p-6 h-full shadow-lg">
                                        <TestimonioItem
                                            testimonio={item.text}
                                            persona={item.name}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 z-30 p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <Image src="/right.svg" alt="right" width={32} height={32}  className="sm:w-14 sm:h-14"  />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;