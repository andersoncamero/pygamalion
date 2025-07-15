import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { CardCarousel } from "../UI/CardCarousel";
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
  const heroRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const CaruselImages = [...heroImages, ...heroImages];

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
            delay: index * 0.1,
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

  const splitTextByChars = useCallback(
    (text: string) => {
      return text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.05,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ));
    },
    [isVisible]
  );

  return (
    <section
      ref={heroRef}
      className="pt-40 pb-16 bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-light)] to-[var(--color-light)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-dark)] mb-6 leading-tight">
            {splitText("En cada voz habita una")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              {" "}
              {splitTextByChars("historia")}
            </span>
          </h1>

          <motion.p
            className="text-xl text-[var(--color-gray)] mb-8 leading-relaxed "
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: "easeOut",
            }}
          >
            Nuestro compromiso es contribuir a la construcción de un mundo en el
            que cada persona pueda encontrar su lugar a través de una educación
            transformadora.
          </motion.p>

          <motion.div
            className="gap-4 flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="container my-5">
              <div className="overflow-hidden w-full">
                <div className="flex whitespace-nowrap animate-scroll">
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

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-full px-8 py-6 text-lg"
              onClick={() => setActiveTab("que-ofrecemos")}
            >
              Descubre nuestros servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-light)] rounded-full px-8 py-6 text-lg bg-transparent"
              onClick={() => setActiveTab("quienes-somos")}
            >
              <Play className="mr-2 w-5 h-5" />
              Conoce nuestra historia
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
