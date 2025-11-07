interface paragraphProps{
    text: string;
    addClass?: string;
}
const Paragraph = ({text, addClass}:paragraphProps) => {
    return(
        <p className={`font-light text-sm sm:text-md  text-center ${addClass}`}>
        {text}
        </p>
    )
}
export default Paragraph;