"use client";

import Image from "next/image";

interface ObsessionCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ObsessionCard({
  title,
  category,
  description,
  image,
}: ObsessionCardProps) {
  return (
    <div className="flex gap-6 py-6 rounded-xl transition duration-300">
      
      {/* Image */}
      <div className="relative w-[120px] h-[170px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl text-primary font-semibold">
            {title}
          </h3>

          <p className="text-sm text-primary/70 mb-3">
            {category}
          </p>

          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* <button className="mt-4 w-fit px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-black transition duration-300">
          Learn more
        </button> */}
      </div>
    </div>
  );
}