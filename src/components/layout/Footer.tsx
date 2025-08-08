import type React from "react";
import { motion } from "motion/react";

import { Logo } from "./Logo";
import { IMAGES } from "../../config/images";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-light)] pt-8 px-10 md:px-18 lg:px-30 m-auto bg-cover">
      <div className="container mx-auto px-4 items-center">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 mb-8">
          <div className="md:flex-1 max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="rounded-xl flex items-center justify-center">
                <Logo src={IMAGES.logos.blue} className="w-80 h-auto" />
              </div>
            </div>
            <p className="text-[var(--color-light)] text-lg sm:text-md md:text-lg lg:text-xl">
              Tejemos mundos que acogen la diferencia, una voz a la vez.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex-1 min-w-[180px] max-w-sm">
              <h4 className="font-normal mb-4 text-xl sm:text-md md:text-lg lg:text-xl text-left">Síguenos</h4>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  },
                  hidden: { opacity: 0 }
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex gap-2 sm:gap-3 md:gap-4 justify-center items-center flex-wrap"
              >
                {[
                  { icon: "https://img.icons8.com/?size=100&id=964RahB4l606&format=png&color=000000", alt: "WhatsApp", url: "https://wa.me/1234567890" },
                  { icon: "https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000", alt: "Facebook", url: "https://facebook.com" },
                  { icon: "https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000", alt: "Instagram", url: "https://instagram.com" },
                  { icon: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000", alt: "LinkedIn", url: "https://linkedin.com" },
                  { icon: "https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=000000", alt: "TikTok", url: "https://tiktok.com" }
                ].map((social) => (
                    <motion.li
                    key={social.alt}
                    variants={{
                      visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                      },
                      hidden: {
                      opacity: 0,
                      y: 20,
                      scale: 0.8
                      }
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-1 cursor-pointer relative"
                    >
                    <div 
                      onClick={() => {
                      const element = document.querySelector(`[data-social="${social.alt}"]`);
                      element?.classList.add('animate-spin');
                      setTimeout(() => {
                        window.open(social.url, "_blank");
                        element?.classList.remove('animate-spin');
                      }, 1000);
                      }}
                      className="relative"
                    >
                      <img
                      src={social.icon}
                      alt={social.alt}
                      data-social={social.alt}
                      loading="lazy"
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform duration-300"
                      />
                    </div>
                    </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-normal text-xl sm:text-md md:text-lg lg:text-xl mb-4">Contacto</h4>
            <ul className="space-y-2 text-[var(--color-light)]">
              <li className="text-lg sm:text-md md:text-lg lg:text-xl ">Asesorías</li>
              <li className="text-lg sm:text-md md:text-lg lg:text-xl ">Desarrollo profesional</li>
              <li className="text-lg sm:text-md md:text-lg lg:text-xl ">Diseño de recursos</li>
              <li className="text-lg sm:text-md md:text-lg lg:text-xl ">Zona glossa</li>
              <li className="text-lg sm:text-md md:text-lg lg:text-xl ">Ventas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-light)]/20 p-8 text-center">
          <p className="text-[var(--color-light)] text-lg sm:text-sm md:text-md lg:text-lg">
            © 2025 Pygmalion Education House. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
