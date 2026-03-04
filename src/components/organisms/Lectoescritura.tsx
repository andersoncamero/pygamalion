import React from "react";
import { ProductCard } from "../molecules/ProductCard";

const sampleProducts = [
  {
    id: "p1",
    image: "/imgs/curso-lectoescritura-1.jpg",
    title: "Curso de Lectoescritura Inicial",
    desc: "Estrategias prácticas para el aula",
  },
  {
    id: "p2",
    image: "/imgs/curso-lectoescritura-2.jpg",
    title: "Evaluación de la Lectoescritura",
    desc: "Herramientas para diagnosticar y acompañar",
  },
  {
    id: "p3",
    image: "/imgs/curso-lectoescritura-3.jpg",
    title: "Intervenciones tempranas",
    desc: "Programas para primeros años",
  },
];

export const Lectoescritura: React.FC = () => {
  return (
    <section className="bg-[var(--color-light)] rounded-3xl px-8 md:px-16 lg:px-20 pt-0.5 pb-8 md:pb-16 lg:pb-20 m-auto bg-cover">
      <div className="w-full h-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark)] mb-4">Lectoescritura</h2>
        <p className="text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--color-gray)] mb-4">
          Recursos y cursos diseñados para fortalecer el proceso de lectoescritura en etapas iniciales.
        </p>

        <div className="flex flex-wrap -mx-3">
          {sampleProducts.map((p) => (
            <div key={p.id} className="w-full sm:w-20 lg:w-95 px-3 mb-6">
              <ProductCard imageSrc={p.image} title={p.title} description={p.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
