interface NavbarItemsProps {
  url: string;
  title: string;
  className?: string;
  newTab?: boolean; // ✅ Nueva prop opcional
}

const NavbarItems = ({ url, title, className, newTab = false }: NavbarItemsProps) => {
  return (
    <a
      href={url}
      className={`text-md hover:text-[#5D4FB6] ${className || ''}`}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} // ✅ Condicional
    >
      {title}
    </a>
  );
};

export default NavbarItems;
