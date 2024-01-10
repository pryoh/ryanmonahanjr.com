import React from "react";
import NavLink from "./NavLink";

// Define the type for each navigation link
type NavLinkType = {
  title: string;
  path: string;
};

// Define the type for the MenuOverlay component
interface MenuOverlayProps {
  links: NavLinkType[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
