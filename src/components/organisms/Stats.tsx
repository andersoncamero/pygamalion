import type React from "react";
import { Typography } from "../atoms/Typography";
import { StatCounter } from "../molecules/StatCounter";

export const Stats: React.FC = () => {
  const statsData = [
    { value: "500+", label: "Educadores formados" },
    { value: "50+", label: "Instituciones" },
    { value: "15+", label: "Años de experiencia" },
    { value: "98%", label: "Satisfacción" },
  ];

  return (
    <section className="bg-[var(--color-light)] p-8 md:p-16 lg:p-24 m-auto bg-cover">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
            El impacto de
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              {" "}
              Aprender de la A a la Z
            </span>
          </Typography>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start w-full max-w-7xl mx-auto">
        {statsData.map((stat, index) => (
          <StatCounter key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};
