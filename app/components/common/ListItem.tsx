import Image from "next/image";
import Paragraph from "./Paragraph";
interface ListItemProps{
    title:string;
    description:string;
}
const ListItem = ({title,description}:ListItemProps) => {
    return (
        <div className="flex gap-5 items-start">
            <Image src="/check.svg" alt="check icon" width={45} height={45} className="w-8 sm:w-11"/>

            <div className="flex flex-col gap-3">
                <h3 className="text-sm sm:text-lg font-medium">{title}</h3>
                <Paragraph text={description} addClass="text-left"/>
            </div>
        </div>
    )
}
export default ListItem;