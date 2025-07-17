import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { CardCarousel } from "../UI/CardCarousel";
import { AnimatedWord } from "../UI/AnimateWord";
// import { Button } from "../UI/Button";

const heroImages = [
  {
    src: "/imgs/estu_col.png",
    alt: "Estudiantes colaborando en proyecto educativo",
    title: "Educación Colaborativa",
  },
  {
    src: "/imgs/maestro_estudiante.png",
    alt: "Maestra ayudando a estudiante con tecnología",
    title: "Tecnología Educativa",
  },
  {
    src: "/imgs/estudiantes.png",
    alt: "Grupo diverso de estudiantes en clase",
    title: "Diversidad e Inclusión",
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
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ));
    },
    [isVisible]
  );

  return (
    <section className="pt-32 sm:pt-40 pb-16 bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-light)] to-[var(--color-light)]">
      <div className="w-full mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-left w-full gap-8">
          <div className="flex-1 space-y-6">
            <motion.h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--color-dark)] leading-tight flex flex-wrap gap-3">
              {splitText("En cada")}
              <AnimatedWord
                colorClass="bg-[var(--color-secondary)]/30"
                delay={0.6}
              >
                voz
              </AnimatedWord>
              {splitText("habita una")}
              <AnimatedWord
                colorClass="bg-[var(--color-yellow)]/30 "
                delay={0.6}
              >
                historia
              </AnimatedWord>
              {splitText("que merece ser")}
              <AnimatedWord
                colorClass="bg-[var(--color-purple)]/30"
                delay={0.6}
              >
                escuchada
              </AnimatedWord>
              {splitText("y")}
              <AnimatedWord
                colorClass="bg-[var(--color-orange)]/30"
                delay={0.6}
              >
                escuchada
              </AnimatedWord>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-[var(--color-gray)] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: "easeOut",
              }}
            >
              Nuestro compromiso es contribuir a la construcción de un mundo en
              el que cada persona pueda encontrar su lugar a través de una
              educación transformadora.
            </motion.p>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto lg:mx-0">
            <motion.img
              src="/imgs/ninos-en-circulo.png"
              alt="Niños acostados en círculo"
              className="w-full h-auto rounded-xl shadow-md object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ type: "spring", duration: 0.8, delay: 0.8 }}
            />
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
      </div>
    </section>
  );
};
