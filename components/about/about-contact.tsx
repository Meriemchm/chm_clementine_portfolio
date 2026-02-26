import React from "react";

export const AboutContact = () => {
  return (
    <div className="bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#f0d784] rounded-3xl p-6 space-y-4">
      <h3 className=" text-xl text-white text-center mb-4">Quick Contact</h3>
      <div className="space-y-3 text-sm">
        <div>
          <p className=" text-[#8c8c8c]">Phone</p>
          <p className=" text-white">+33 6 41 16 89 43</p>
        </div>
        <div>
          <p className=" text-[#8c8c8c]">Email</p>
          <a
            href="mailto:clementine.budon@gmail.com"
            className=" text-[#f0d784] hover:underline"
          >
            clementine.budon@gmail.com
          </a>
        </div>
        <div>
          <p className=" text-[#8c8c8c]">Linkedin</p>
          <p className=" text-white">Clémentine Budon</p>
        </div>
      </div>
    </div>
  );
};
