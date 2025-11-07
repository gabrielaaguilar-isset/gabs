import Paragraph from "./Paragraph";

interface TitleSectionProps {
    sectionName: string;
    mainTitle: string;
    description: string; 
}
const TitleSection = ({ sectionName, mainTitle, description }: TitleSectionProps) => {
    return (
        <div className="m-auto text-center flex flex-col justify-center items-center">
            <div className="purple2 py-1 px-7 text-sm sm:text-ms w-fit rounded-full m-auto">
                {sectionName}
            </div>

            <h2 className="text-2xl sm:text-5xl font-medium  md:mt-10 mt-4 sm:mt-6 max-w-4xl ">
                {mainTitle}
            </h2>

           
            <Paragraph text={description} addClass="max-w-4xl mt-6" />

        </div>

    )
}
export default TitleSection;