import type React from "react";

export const Stats: React.FC = () => {
  return (
    <section className="py-1.5 sm:py-2 lg:py-2.5 bg-[var(--color-light)] mt-2 sm:mt-2.5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
            El impacto de
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              {" "}
              Aprender de la A a la Z
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center group flex-1 min-w-[140px] max-w-[200px]">
          <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg rotate-[-2deg] mb-3 sm:mb-4 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            500+
          </div>
          <div className="text-[var(--color-gray)]">Educadores formados</div>
        </div>

        <div className="lex flex-col items-center text-center group flex-1 min-w-[140px] max-w-[200px]">
          <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg rotate-[-2deg] mb-3 sm:mb-4 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            50+
          </div>
          <div className="text-[var(--color-gray)]">Instituciones</div>
        </div>

        <div className="lex flex-col items-center text-center group flex-1 min-w-[140px] max-w-[200px]">
          <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg rotate-[-2deg] mb-3 sm:mb-4 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            15+
          </div>
          <div className="text-[var(--color-gray)]">Años de experiencia</div>
        </div>

        <div className="lex flex-col items-center text-center group flex-1 min-w-[140px] max-w-[200px]">
          <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg rotate-[-2deg] mb-3 sm:mb-4 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            98%
          </div>
          <div className="text-[var(--color-gray)] text-sm sm:text-base lg:text-lg font-medium">
            Satisfacción
          </div>
        </div>
      </div>
    </section>
  );
};
