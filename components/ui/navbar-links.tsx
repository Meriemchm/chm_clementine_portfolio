"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  link: string;
  children?: { name: string; link: string }[];
}

interface NavbarItem {
  items: NavItem[];
  onClick?: () => void;
}

export default function NavbarLinks({ items, onClick }: NavbarItem) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openIndex !== null) {
        const currentRef = itemRefs.current[openIndex];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setOpenIndex(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openIndex]);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {items.map((item, index) => {
        // Si l'élément n'a pas d'enfants, on rend un lien simple
        if (!item.children) {
          return (
            <Link
              key={index}
              href={item.link}
              onClick={onClick}
              className="hover:text-primary/80 text-xl transition capitalize py-2 px-1 cursor-default select-none"
            >
              {item.name}
            </Link>
          );
        }

        // Sinon, on gère le dropdown
        return (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="relative"
          >
            {/* Parent container cliquable pour ouvrir/fermer */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="hover:text-primary/80 text-xl transition capitalize py-2 px-1 select-none">
                {item.name}
              </span>

              {/* Bouton mobile (visible uniquement sur mobile) */}
              <button
                className="p-1 hover:bg-gray-100 rounded-md transition-colors md:hidden focus:outline-none"
                aria-label="Toggle dropdown"
                onClick={(e) => e.stopPropagation()} // évite un double appel
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Flèche desktop (visible uniquement sur desktop) */}
              <div className="hidden md:block">
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Desktop dropdown (affiché si ouvert) */}
            {openIndex === index && (
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg p-2 min-w-50 z-50 hidden md:block">
                {item.children.map((child, i) => (
                  <Link
                    key={i}
                    href={child.link}
                    onClick={() => {
                      setOpenIndex(null);
                      if (onClick) onClick();
                    }}
                    className="block px-4 py-2 text-base hover:bg-primary hover:text-black rounded-md transition"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile dropdown (accordéon animé) */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="flex flex-col mt-2 pl-4 border-l-2 border-gray-200 ml-2">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        href={child.link}
                        onClick={() => {
                          setOpenIndex(null);
                          if (onClick) onClick();
                        }}
                        className="py-2 px-3 text-lg hover:bg-gray-100 hover:text-primary rounded-md transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}