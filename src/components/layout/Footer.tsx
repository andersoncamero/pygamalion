import type React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-light)] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-8 mb-8">
          <div className="md:flex-1 max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="rounded-xl flex items-center justify-center">
                <Logo src="/logo-FA.png" className="w-80 h-auto" />
              </div>
            </div>
            <p className="text-[var(--color-light)]">
              Transformando la educación a través del poder de las expectativas
              positivas y el acompañamiento personalizado.
            </p>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-[var(--color-light)]">
              <li>Formación Docente</li>
              <li>Consultoría Educativa</li>
              <li>Contenidos Educativos</li>
              <li>Inclusión Educativa</li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-[var(--color-light)]">
              <li>info@pygmalioneducation.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Education Street</li>
              <li>Learning City, LC 12345</li>
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
