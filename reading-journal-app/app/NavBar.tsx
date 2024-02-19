"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImBooks } from "react-icons/im";
import classnames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Book Shelf",
      href: "/book-shelf",
    },
    {
      label: "Book Review",
      href: "/book-review",
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
            className={classnames({
              "text-tickle-me-pink": link.href === currentPath,
              "text-cherry-blossom-pink": link.href !== currentPath,
              "hover:text-blush-pink transition-colors": true,
            })}
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
