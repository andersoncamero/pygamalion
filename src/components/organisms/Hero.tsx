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
    <section className="pt-48 md:pt-56 lg:pt-64 pb-4 bg-[var(--color-light)] px-4 md:px-8 lg:px-12 m-auto">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center w-full">
        <HeroHeader isVisible={isVisible} />

        <div className="w-full mt-12">
          <HeroGallery images={heroImages} isVisible={isVisible} />
        </div>

        <HeroFooter isVisible={isVisible} />
      </div>
    </section>
  );
};
