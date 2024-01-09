import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-blue-50 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
