"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

type NavLinkType = {
  title: string;
  path: string;
};

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleScroll = () => {
    setScrolling(true);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Close the dropdown menu when window size is desktop
      setNavbarOpen(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks: NavLinkType[] = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Technologies",
      path: "#technologies",
    },
    {
      title: "Languages",
      path: "#languages",
    },
    {
      title: "Projects",
      path: "#projects",
    },
  ];

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolling
          ? "bg-[#121212] bg-opacity-90 backdrop-blur-md"
          : "bg-[#121212] bg-opacity-100"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          passHref
          className="text-2xl md:text-3xl text-white font-semibold"
        >
          ryanmonahanjr
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
