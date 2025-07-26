import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { CardCarousel } from "../UI/CardCarousel";
import { AnimatedWord } from "../UI/AnimateWord";

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
    title: "Pasiòn por la educaciòn",
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
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const CaruselImages = [...heroImages, ...heroImages, ...heroImages];

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsVisible(true);
    });
  });

  const splitText = useCallback(
    (text: string) => {
      return text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block m-1"
        >
          {word}
        </motion.span>
      ));
    },
    [isVisible]
  );

  return (
    <section className="pt-32 md:pt-35 lg:pt-37 pb-16 bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-light)] to-[var(--color-light)] px-8 md:px-16 lg:px-24 m-auto bg-cover">
      <div className="w-full mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-left w-full gap-8">
          <div className="flex-1 mt-2 lg:mt-16 box-content md:box-border flex flex-col items-center text-center">
            <motion.h1 className="font-bold font-primary text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-dark)] leading-tight flex flex-wrap gap-3 line-clamp-2 overflow-hidden justify-center text-center">
              {splitText("En cada")}
              <AnimatedWord
                colorClass="bg-[var(--color-secondary)]/50"
                delay={0.6}
              >
                voz
              </AnimatedWord>
              {splitText("habita una")}
              <AnimatedWord
                colorClass="bg-[var(--color-yellow)]/50 "
                delay={0.6}
              >
                historia
              </AnimatedWord>
              {splitText("que merece ser")}
              <AnimatedWord
                colorClass="bg-[var(--color-purple)]/50"
                delay={0.6}
              >
                escuchada
              </AnimatedWord>
              {splitText("y")}
              <AnimatedWord
                colorClass="bg-[var(--color-orange)]/50"
                delay={0.6}
              >
                reconocida
              </AnimatedWord>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[var(--color-dark)] font-secondary leading-relaxed pt-6 sm:pt-12 md:pt-16 lg:pt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: "easeOut",
              }}
            >
              Nuestro compromiso es contribuir a la construcción de un mundo en
              el que cada persona pueda encontrar su lugar.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
        >
          <div className="my-8 sm:my-12">
            <div className="overflow-hidden w-full">
              <div
                className={`flex whitespace-nowrap ${
                  isPaused ? "animate-scroll-paused" : "animate-scroll"
                }`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {CaruselImages.map((img, index) => (
                  <CardCarousel
                    imageSrc={img.src}
                    altText={img.alt}
                    titleImage={img.title}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 mt-2 lg:mt-16 box-content md:box-border gap-4 flex flex-col items-center text-center">
          <motion.h1
            className="font-medium font-three text-3xl sm:text-3xl md:text-4xl lg:text-[46px] text-[var(--color-gray)] leading-tight flex flex-wrap line-clamp-2 overflow-hidden justify-center text-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            El Efecto Pigmalion es nuestro faro en la construcción de futuros sociales. 
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[var(--color-dark)] font-secondary leading-relaxed pt-1 sm:pt-4 md:pt-6 lg:pt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: "easeOut",
            }}
          >
            Creemos profundamente en el potencial de cada persona y en el impacto de una educación que confía, inspira y acompaña. 
          </motion.p>
        </div>
      </div>
    </section>
  );
};
