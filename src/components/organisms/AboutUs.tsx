import type React from "react";
import { IMAGES } from "../../config/images";
import { WhoWeAre } from "./AboutUs/WhoWeAre";
import { Vision } from "./AboutUs/Vision";
import { Values } from "./AboutUs/Values";

export const AboutUs: React.FC = () => {
  const whoWeAreData = {
    description1: "Somos Pygmalión Education House, un sello educativo especializado en la creación, producción y difusión de contenidos que promueven la formación de educadores y estudiantes que se reconocen como participantes activos en el cambio social; como diseñadores de futuros sociales. Además, brindamos servicios especializados dirigidos a instituciones y maestros para facilitar la adopción de prácticas pedagógicas efectivas, el desarrollo curricular y el fortalecimiento profesional continuo.",
    description2: "Nuestra labor se fundamenta en el Efecto Pigmalión, reconocemos que las expectativas positivas tienen el poder de transformar el desempeño, la motivación y la autoestima. Creemos profundamente en el potencial de cada persona y en el impacto de una educación que confía, inspira y acompaña.",
    features: [
      {
        title: "Efecto Pygmalión",
        description: "Creemos en el poder de las expectativas positivas para impulsar el desarrollo, la autoestima y la superación personal."
      },
      {
        title: "Transformación social",
        description: "Desarrollamos contenidos orientados a la formación de educadores y estudiantes como diseñadores de futuros sociales más justos y sostenibles."
      },
      {
        title: "Educacion Inclusiva",
        description: "Promovemos entornos de aprendizaje accesibles, equitativos y participativos que acogen la diversidad y eliminan barreras."
      },
      {
        title: "Aprendizaje Socioemocional",
        description: "Integramos el aprendizaje socioemocional como componente esencial en nuestros contenidos educativos."
      }
    ]
  };

  const visionData = {
    imageSrc: IMAGES.aboutUs.img1,
    title: "Nuestra Visión",
    description: "En Pygmalion Education House buscamos contribuir a una educación más humana y equitativa; por ello, el bienestar emocional y la inclusión educativa son ejes centrales de nuestro enfoque. Aspiramos a ser un referente en el ámbito educativo, no solo por la calidad de nuestros servicios y contenidos, sino también por el compromiso ético y transformador que guía nuestro quehacer. En Pygmalion Education House creemos que cada persona tiene una voz que merece ser escuchada y un camino único de aprendizaje que necesita ser acompañado con respeto y dedicación."
  };

  return (
    <div>
      <section className="w-full flex flex-col lg:flex-row lg:items-stretch lg:space-x-12 space-y-8 lg:space-y-0 p-4 sm:p-6 md:p-10 lg:p-20 min-h-screen m-auto bg-cover">
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 items-stretch h-full">
          <WhoWeAre {...whoWeAreData} />
          <Vision {...visionData} />
        </div>
      </section>
      <Values />
    </div>
  );
};
