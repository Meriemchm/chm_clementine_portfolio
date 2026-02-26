import { ContactData } from "@/data/ContactData";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  return (
    <div>
      {" "}
      {/* Contact Info */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div>
          <h2 className=" text-3xl mb-6 text-white">
            Contact Information
          </h2>
          <p className="text-md text-[#f2f2f2]/50 mb-8">
            Feel free to reach out through any of these channels. I'm always
            open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="space-y-4">
          {ContactData.map((info, index) => (
            <motion.div
              key={info.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-6 bg-[#1a1a1a] border-2 border-[#333] hover:border-[#f0d784] rounded-2xl transition-all group-hover:translate-x-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-[#f0d784] to-[#ad8915] rounded-xl group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className=" text-sm text-[#8c8c8c] mb-1">
                      {info.label}
                    </p>
                    <p className=" text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-6 bg-[#1a1a1a] border-2 border-[#333] rounded-2xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-[#f0d784] to-[#ad8915] rounded-xl">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className=" text-sm text-[#8c8c8c] mb-1">
                      {info.label}
                    </p>
                    <p className=" text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
