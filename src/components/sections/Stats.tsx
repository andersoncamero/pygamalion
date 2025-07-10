import type React from "react";

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--color-light)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-8 text-center">
          El impacto de
          <strong> Aprender de la A a la Z</strong>
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          <div className="flex-1 min-w-[120px] max-w-[200px] text-center">
            <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-4xl md:text-5xl px-6 py-3 rounded-lg rotate-[-3deg] mb-2">
              500+
            </div>
            <div className="text-[var(--color-gray)]">Educadores formados</div>
          </div>

          <div className="flex-1 min-w-[120px] max-w-[200px] text-center">
            <div className="inline-block bg-[var(--color-secondary)]/40 text-[var(--color-dark)] font-bold text-4xl md:text-5xl px-6 py-3 rounded-lg rotate-[-3deg] mb-2">
              50+
            </div>
            <div className="text-[var(--color-gray)]">Instituciones</div>
          </div>

          <div className="flex-1 min-w-[120px] max-w-[200px] text-center">
            <div className="inline-block bg-[var(--color-gray)]/40 text-[var(--color-dark)] font-bold text-4xl md:text-5xl px-6 py-3 rounded-lg rotate-[-3deg] mb-2">
              15+
            </div>
            <div className="text-[var(--color-gray)]">Años de experiencia</div>
          </div>

          <div className="flex-1 min-w-[120px] max-w-[200px] text-center">
            <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-4xl md:text-5xl px-6 py-3 rounded-lg rotate-[-3deg] mb-2">
              98%
            </div>
            <div className="text-[var(--color-gray)]">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
};
