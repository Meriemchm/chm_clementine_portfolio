"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectMediaProps {
  section: {
    images?: string[];
  };
}

export default function ProjectMedia({ section }: ProjectMediaProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // Gestion des touches clavier pour la lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev > 0 ? prev - 1 : section.images!.length - 1));
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev < section.images!.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, section.images]);

  if (!section?.images || section.images.length === 0) return null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <div className="lg:w-1/2 relative">
        {/* Viewport */}
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {section.images.map((img, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-75 group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img}
                  alt={`project image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Overlay avec bouton au survol */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(index);
                    }}
                    className="px-4 py-2 bg-primary text-black rounded-md text-sm font-medium hover:bg-primary/80 transition"
                  >
                    see
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flèches de navigation du carrousel */}
        {section.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-primary transition"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-primary transition"
            >
              →
            </button>
          </>
        )}

        {/* Pagination du carrousel */}
        {section.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {section.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === selectedIndex ? "bg-primary scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox modale */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={section.images[lightboxIndex]}
              alt={`project image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Bouton fermeture */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            >
              <X size={24} />
            </button>

            {/* Navigation dans la lightbox */}
            {section.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : section.images!.length - 1));
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-primary transition"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev < section.images!.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-primary transition"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Indicateur d'image (optionnel) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {lightboxIndex + 1} / {section.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}