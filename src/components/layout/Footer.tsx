import type React from "react";
import { Logo } from "./Logo";
import { IMAGES } from "../../config/images";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-light)] p-8 md:p-16 lg:p-24 m-auto bg-cover">
      <div className="container mx-auto px-4 items-center">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-8 mb-8">
          <div className="md:flex-1 max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="rounded-xl flex items-center justify-center">
                <Logo src={IMAGES.logos.blue} className="w-80 h-auto" />
              </div>
            </div>
            <p className="text-[var(--color-light)] text-md sm:text-sm md:text-md lg:text-lg">
              Transformando la educación a través del poder de las expectativas
              positivas y el acompañamiento personalizado.
            </p>
          </div>

          <div className="flex-1 min-w-[150px] text-right">
            <h4 className="font-semibold mb-4 text-right">Contacto</h4>
            <ul className="space-y-2 text-[var(--color-light)] text-right">
              <li>info@pygmalioneducation.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Education Street</li>
              <li>Learning City, LC 12345</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex-1 min-w-[180px] max-w-sm">
            <h4 className="font-semibold mb-4 text-center">Síguenos</h4>
            <ul className="flex gap-2 sm:gap-3 justify-center items-center flex-wrap">
              <li className="flex flex-col items-center space-y-1">
                <img
                  src="https://img.icons8.com/?size=100&id=964RahB4l606&format=png&color=000000"
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-xs hidden sm:block">WhatsApp</span>
              </li>
              <li className="flex flex-col items-center space-y-1">
                <img
                  src="https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000"
                  alt="Facebook"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-xs hidden sm:block">Facebook</span>
              </li>
              <li className="flex flex-col items-center space-y-1">
                <img
                  src="https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000"
                  alt="Instagram"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-xs hidden sm:block">Instagram</span>
              </li>
              <li className="flex flex-col items-center space-y-1">
                <img
                  src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                  alt="LinkedIn"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-xs hidden sm:block">LinkedIn</span>
              </li>
              <li className="flex flex-col items-center space-y-1">
                <img
                  src="https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=000000"
                  alt="TikTok"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-xs hidden sm:block">TikTok</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-light)]/20 pt-8 text-center">
          <p className="text-[var(--color-light)]">
            © 2024 Pygmalion Education House. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
