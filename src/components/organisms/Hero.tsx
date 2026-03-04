import { useEffect, useState } from "react";
import { HeroHeader } from "../molecules/HeroHeader";
import { HeroGallery } from "../molecules/HeroGallery";
import { HeroFooter } from "../molecules/HeroFooter";
import { IMAGES } from "../../config/images";

const heroImages = [
  {
    src: IMAGES.carousel.img1,
    alt: "Equidad y justicia social",
    title: "Equidad y justicia social",
  },
  {
    src: IMAGES.carousel.img2,
    alt: "Maestra ayudando a estudiante con tecnología",
    title: "Pasión por la educación",
  },
  {
    src: IMAGES.carousel.img3,
    alt: "Grupo diverso de estudiantes en clase",
    title: "Aprendizaje sin etiquetas",
  },
  {
    src: IMAGES.carousel.img4,
    alt: "Grupo diverso de estudiantes en clase",
    title: "Conciencia y comporomiso",
  },
  {
    src: IMAGES.carousel.img5,
    alt: "Grupo diverso de estudiantes en clase",
    title: " Convivencia en la pluralidad",
  },
];

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsVisible(true);
    });
  }, []);

  return (
    <section className="pt-32 md:pt-35 lg:pt-37 pb-4 bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-light)] to-[var(--color-light)] px-8 md:px-16 lg:px-24 m-auto bg-cover">
      <div className="w-full mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-left w-full gap-8">
          <HeroHeader isVisible={isVisible} />
        </div>

        <HeroGallery images={heroImages} isVisible={isVisible} />

        <HeroFooter isVisible={isVisible} />
      </div>
    </section>
  );
};
