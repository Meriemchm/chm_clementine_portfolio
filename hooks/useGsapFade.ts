"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

export function useGsapFade(
  direction: Direction = "up",
  duration = 1,
  distance = 200
) {
  const refs = useRef<HTMLElement[]>([]);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (!refs.current.length) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const fromVars: Record<string, number> = {};

      // Limiter la distance sur mobile à 200px
      const effectiveDistance = isMobile ? Math.min(distance, 200) : distance;

      switch (direction) {
        case "up":
          fromVars.y = effectiveDistance;
          break;
        case "down":
          fromVars.y = -effectiveDistance;
          break;
        case "left":
          fromVars.x = effectiveDistance;
          break;
        case "right":
          fromVars.x = -effectiveDistance;
          break;
      }

      refs.current.forEach((el) => {
        if (!el) return;

        gsap.from(el, {
          ...fromVars,
          opacity: 0,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top bottom" : "top 80%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    // Refresh au load
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    // Refresh automatique toutes les 5 secondes
    const intervalId = setInterval(() => {
      ScrollTrigger.refresh();
    }, 5000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearInterval(intervalId);
      ctx.revert();
    };
  }, [direction, duration, distance]);

  // Ajoute ou met à jour l'élément dans le tableau
  const setRef = (el: HTMLElement | null, index?: number) => {
    if (!el) return;

    if (typeof index === "number") {
      refs.current[index] = el;
    } else if (!refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return setRef;
}
