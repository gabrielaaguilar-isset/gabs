interface ButtonProps {
  title: string;
  className?: string;
  secundary?: boolean;
  onClick?: () => void;
  url?: string;
  targetBlank?: boolean; 
}

const Button = ({
  title,
  className,
  secundary,
  onClick,
  url,
  targetBlank = false, 
}: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      if (targetBlank) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`text-sm sm:text-md mainPurple rounded-full py-1.5 px-6 text-center w-fit cursor-pointer 
        ${className || ''} 
        ${secundary ? 'purple2 border border-[#5D4FB6]' : ''}`}
    >
      {title}
    </button>
  );
};

export default Button;
