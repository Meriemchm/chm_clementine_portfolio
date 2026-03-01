"use client";
import clsx from "clsx";
import { NavbarData } from "@/data/NavbarData";
import { Container } from "../ui/container";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";

const Navbar = () => {

  return (
    <div
      className={clsx(
        "absolute w-full z-50 top-2 transition-all duration-300 bg-transparent  text-white"
      )}
    >
      {/* Navbar container */}
      <div className="mx-auto md:max-w-7xl max-w-xl md:px-4">
        <DesktopNavbar items={NavbarData} />
        <MobileNavbar items={NavbarData} />
      </div>
    </div>
  );
};

export default Navbar;
