import Link from "next/link";
import React from "react";
import { ImBooks } from "react-icons/im";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Book Shelf",
      href: "/book-shelf",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <ImBooks size="2.5em" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-cherry-blossom-pink hover:text-blush-pink transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
