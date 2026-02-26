"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarLinks from "../ui/navbar-links";
import { GameButton } from "../ui/GameButton";
import { Menu, X } from "lucide-react";

interface MobileNavbarProps {
  items: { name: string; link: string }[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden rounded-full p-5 flex w-full h-20 justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/Ellipse.svg"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <p className="capitalize font-extralight text-2xl leading-normal">
            CB
          </p>
        </Link>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col justify-center items-center absolute gap-8 -top-2 left-0 w-full min-h-screen bg-black text-white z-40">
          <NavbarLinks items={items} onClick={toggleMenu} />
          <Link href="/contact"  onClick={toggleMenu}>
            <GameButton variant="rounded" size="large">
              Contact Me
            </GameButton>
          </Link>
        </div>
      )}

      {/* Hamburger / Close Icon */}
      <div
        className="absolute md:hidden text-3xl cursor-pointer z-50 top-6.5 right-9"
        onClick={toggleMenu}
      >
        {open ? (
          <X size={28} className="text-white" />
        ) : (
          <Menu size={28} className="text-white" />
        )}
      </div>
    </>
  );
};

export default MobileNavbar;
