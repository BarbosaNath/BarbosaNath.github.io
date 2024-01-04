import { BsFillMoonStarsFill } from "react-icons/bs";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <nav className="p-4 mb-12 flex justify-between bg-gray-100">
      <h1 className="text-xl">Matheus Eduardo</h1>
      <ul className="hidden md:flex items-center gap-8">
        <NavItem active>Sobre Mim</NavItem>
        <NavItem>Portfólio</NavItem>
        <NavItem>Formação</NavItem>
        <NavItem>Atuação Profissional</NavItem>
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
