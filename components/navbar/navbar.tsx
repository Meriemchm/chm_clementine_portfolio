"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { NavbarData } from "@/data/NavbarData";
import { Container } from "../ui/container";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);

  /* Navbar scroll trigger */

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!ticking.current) {
  //       window.requestAnimationFrame(() => {
  //         setIsScrolled(window.scrollY > 10);
  //         ticking.current = false;
  //       });
  //       ticking.current = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className={clsx(
        "absolute w-full z-50 top-2 transition-all duration-300",
        isScrolled
          ? "md:bg-white/50 bg-white backdrop-blur-md shadow-lg rounded-full text-black"
          : "bg-transparent text-white"
      )}
    >
      {/* Navbar container */}
      <Container>
        <DesktopNavbar items={NavbarData} />
        <MobileNavbar items={NavbarData} />
      </Container>
    </div>
  );
};

export default Navbar;
