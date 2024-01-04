import { FC, ReactNode } from "react";

const NavItem: FC<{ href?: string; children: ReactNode; active?: boolean }> = ({
  href = "#",
  children,
  active,
}) => {
  
  let className = "mr-5";
  className += active ? " text-black" : " text-gray-600";

  return (
    <li>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
