import { FC } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

interface NavbarProps {
  title: string;
  path: string;
}

const navLinks: NavbarProps[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed top-0 left-0 right-0">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href={"/"}
          className=" text-lg md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 med:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <NavLink href={link.path} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
