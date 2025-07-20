import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { CardCarousel } from "../UI/CardCarousel";
import { AnimatedWord } from "../UI/AnimateWord";
import { ImageCollage } from "../UI/ImageCollage";
// import { Button } from "../UI/Button";

const heroImages = [
  {
    src: "/imgs/img-1.webp",
    alt: "Estudiantes colaborando en proyecto educativo",
    title: "Educación Colaborativa",
  },
  {
    src: "/imgs/img-2.webp",
    alt: "Maestra ayudando a estudiante con tecnología",
    title: "Tecnología Educativa",
  },
  {
    src: "/imgs/img-3.webp",
    alt: "Grupo diverso de estudiantes en clase",
    title: "Diversidad e Inclusión",
  },
    {
    src: "/imgs/img-4.webp",
    alt: "Grupo diverso de estudiantes en clase",
    title: "Diversidad e Inclusión",
  },  {
    src: "/imgs/img-5.webp",
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
          className="inline-block m-1"
        >
          {word}
        </motion.span>
      ));
    },
    [isVisible]
  );

  return (
    <section className="pt-32 md:pt-42 lg:pt-52 pb-16 bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-light)] to-[var(--color-light)] px-8 md:px-16 lg:px-24 m-auto bg-cover">
      <div className="w-full mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-left w-full gap-8">
          <div className="flex-1 mt-2 lg:mt-16 box-content md:box-border">
            <motion.h1 className="font-bold font-primary text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-dark)] leading-tight flex flex-wrap gap-3 line-clamp-2 overflow-hidden">
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
                reconocida
              </AnimatedWord>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--color-dark)]/70 font-secondary leading-relaxed pt-6 sm:pt-12 md:pt-16 lg:pt-20"
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

          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
            <motion.div
              className="w-full h-auto rounded-xl  overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ type: "spring", duration: 0.8, delay: 0.8 }}
            >
              <ImageCollage
                images={[
                  {
                    id: 1,
                    src: "/imgs/ninos-en-circulo.webp",
                    alt: "ninos en un circulo",
                  },
                  {
                    id: 2,
                    src: "/imgs/ninos-en-circulo.webp",
                    alt: "ninos en un circulo",
                  },
                  {
                    src: "/imgs/ninos-en-circulo.webp",
                    alt: "ninos en un circulo",
                  },
                  {
                    id: 1,
                    src: "/imgs/ninos-en-circulo.webp",
                    alt: "ninos en un circulo",
                  },
                  {
                    id: 1,
                    src: "/imgs/ninos-en-circulo.webp",
                    alt: "ninos en un circulo",
                  },
                ]}
              />
            </motion.div>
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
