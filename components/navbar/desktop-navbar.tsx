"use client";
import Link from "next/link";
import NavbarLinks from "../ui/navbar-links";
import { GameButton } from "../ui/GameButton";
import Image from "next/image";

interface DesktopNavbarProps {
  items: { name: string; link: string }[];
}
const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ items }) => {
  return (
    <div className="hidden md:flex w-full h-20 justify-between items-center">
      {/* Logo */}
      <Link className="flex items-center gap-2" href={"/"}>
      <Image        
      src="/Ellipse.svg"
        alt="Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
        <p className="capitalize font-extralight text-xl">CB</p>
      </Link>

      {/* Nav Items */}
      <div className="flex items-center gap-8">
        <NavbarLinks items={items} />

        {/* Contact Button */}
        <Link href="/contact">
          <GameButton variant="rounded" size="medium">
            Contact Me
          </GameButton>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
