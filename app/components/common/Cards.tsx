import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardsProps {
  img?: string;
  text: string;
  addClass?: string;
  workCard?: boolean;
  workSrc?: string;
  link?: string;
}

const Cards = ({
  img = "/work.svg",
  text,
  addClass,
  workCard = false,
  workSrc = "/work.svg",
  link,
}: CardsProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative bg-[#1A1A1A] border border-[#262626] flex flex-col justify-center ${workCard ? "items-start" : "items-center"
        } gap-3 sm:gap-6 rounded-2xl overflow-hidden ${addClass} ${workCard ? "p-5" : "py-4 px-7 sm:p-7"
        }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none w-48 h-48 rounded-full bg-[#5D4FB6]/20 blur-3xl transition-transform duration-100"
          style={{
            left: position.x - 96,
            top: position.y - 96,
          }}
        ></div>
      )}

      {workCard ? (
        <Image
          src={workSrc || img}
          alt={text}
          className="w-full h-auto z-10"
          width={422}
          height={278}
        />
      ) : (
        <Image
          src={img}
          alt={text}
          width={77}
          height={77}
          className="z-10"
        />
      )}

      <h4
        className={`text-sm sm:text-lg z-10 ${workCard ? "text-left" : "text-center"
          }`}
      >
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-lg z-10  text-left transition group"
          >
            {text}
            <svg
              aria-hidden="true"
              className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M7 17L17 7"></path>
              <path d="M10 7h7v7"></path>
            </svg>
          </Link>
        ) : (
          text
        )}
      </h4>
    </div>
  );
};

export default Cards;
