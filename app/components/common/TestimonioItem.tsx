import Image from "next/image";

interface TestimonioItemProps {
    testimonio: string;
    persona: string;
}


const TestimonioItem = ({ testimonio, persona }: TestimonioItemProps) => {
    return (
        <div className="flex flex-col gap-10 justify-around items center p-0 ">
            <Image src="/quote.svg" alt="quote" width={404} height={60} />
            <div className="max-h-[108px] h-[108px] overflow-y-auto">
                <h4 className="text-center whitespace-pre-lin">{testimonio}</h4>
            </div>
            <h2 className="textPurple text-center">{persona}</h2>
        </div>
    )
}

export default TestimonioItem;