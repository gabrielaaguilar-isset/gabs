

interface NavbarItemsProps {
  url: string;
  title: string;
  className?: string; 
}

const NavbarItems = ({ url, title, className }: NavbarItemsProps) => {
  
    return (
    <a 
      href={url}
      className={`text-md hover:text-[#5D4FB6] ${className || ''}`}
    >
      {title}
    </a>
  );
};

export default NavbarItems;
