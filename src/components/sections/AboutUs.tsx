import { Brain, CheckCircle, Globe, Handshake, Users } from "lucide-react";
import type React from "react";
import { IMAGES } from "../../config/images";

export const AboutUs: React.FC = () => {
  return (
    <div>
      <section className="w-full flex flex-col lg:flex-row lg:items-stretch lg:space-x-12 space-y-8 lg:space-y-0 p-4 sm:p-6 md:p-10 lg:p-20 min-h-screen m-auto bg-cover">
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6 h-full">
          <div className="flex-1 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark)]">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[var(--color-gray)]">
              Somos Pygmalion Education House, un sello educativo especializado
              en la creación, producción y difusión de contenidos que promueven
              la formación de educadores y estudiantes que se reconocen como
              participantes activos en el cambio social; como diseñadores de
              futuros sociales. Además, brindamos servicios especializados
              dirigidos a instituciones y maestros para facilitar la adopción de
              prácticas pedagógicas efectivas, el desarrollo curricular y el
              fortalecimiento profesional continuo.
            </p>
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl  text-[var(--color-gray)]">
              Nuestra labor se fundamenta en el Efecto Pigmalión, reconocemos
              que las expectativas positivas tienen el poder de transformar el
              desempeño, la motivación y la autoestima. Creemos profundamente en
              el potencial de cada persona y en el impacto de una educación que
              confía, inspira y acompaña.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl text-[var(--color-gray)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]">
                    Efecto Pygmalion
                  </h4>
                  <p className="font-normal text-[var(--color-gray)] text-xs sm:text-sm md:text-base lg:text-lg">
                    Creemos en el poder de las expectativas positivas para
                    impulsar el desarrollo, la autoestima y la superación
                    personal.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl text-[var(--color-gray)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]">
                    Transformación social
                  </h4>
                  <p className="font-normal text-[var(--color-gray)] text-xs sm:text-sm md:text-base lg:text-lg">
                    Desarrollamos contenidos orientados a la formación de
                    educadores y estudiantes como diseñadores de futuros
                    sociales más justos y sostenibles.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl text-[var(--color-gray)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]">
                    Educacion Inclusiva
                  </h4>
                  <p className="font-normal text-[var(--color-gray)] text-md sm:text-sm md:text-md lg:text-lg">
                    Promovemos entornos de aprendizaje accesibles, equitativos y
                    participativos que acogen la diversidad y eliminan barreras.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl text-[var(--color-gray)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]">
                    Aprendizaje Socioemocional
                  </h4>
                  <p className="font-normal text-[var(--color-gray)] text-xs sm:text-sm md:text-base lg:text-lg">
                    Integramos el aprendizaje socioemocional como componente
                    esencial en nuestros contenidos educativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden rounded-2xl shadow-xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="flex-[7] flex flex-col">
              <img
                src="https://grupogeard.com/wp-content/uploads/2021/05/11.-Trabajo-en-equipo-en-educacion-virtual-como-fomentarlo.png?height=400&width=600"
                alt="Equipo de Pygmalion Education House trabajando con educadores"
                className="w-full h-full"
              />
            </div>
            <div className="flex-[3] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-2 sm:p-6 text-[var(--color-light)] flex flex-col">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Nuestra Visión
              </h3>
              <p className="text-[var(--color-light)] leading-relaxed text-xl sm:text-xl md:text-2xl lg:text-3xl">
                En Pygmalion Education House buscamos contribuir a una educación
                más humana y equitativa; por ello, el bienestar emocional y la
                inclusión educativa son ejes centrales de nuestro enfoque.
                Aspiramos a ser un referente en el ámbito educativo, no solo por
                la calidad de nuestros servicios y contenidos, sino también por
                el compromiso ético y transformador que guía nuestro quehacer.
                En Pygmalion Education House creemos que cada persona tiene una
                voz que merece ser escuchada y un camino único de aprendizaje
                que necesita ser acompañado con respeto y dedicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-3xl p-8 md:p-16 lg:p-20  m-auto bg-cover">
        <div className="text-center mb-12">
          <h2 className="text-7xl text-[var(--color-dark)] mb-4">
            Nuestros Valores
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-gray)] mx-auto">
            Los principios que guían nuestro trabajo y definen nuestra identidad
            como organización educativa
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img5}
              className="rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-normal text-[var(--color-dark)] mb-2">
              Glocalidad
            </h4>
            <p className="text-[var(--color-gray)] text-xl">
              Somos conscientes de nuestro entorno inmediato, y al mismo tiempo,
              orientamos nuestro actuar con una mirada global.
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img4}
              alt="Transformación educativa y crecimiento"
              className="rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-normal text-[var(--color-dark)] mb-2">
              Responsabilidad social
            </h4>
            <p className="text-[var(--color-gray)] text-xl">
              Asumimos un compromiso activo con el bienestar colectivo, guiados
              por principios de ética, solidaridad y sostenibilidad.
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img3}
              alt="Empatia"
              className=" rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              Empatía
            </h4>
            <p className="text-[var(--color-gray)] text-xl">
              Actuamos con sensibilidad y justicia, promoviendo entornos
              educativos basados en el respeto, la equidad y la dignidad humana.
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img2}
              alt="Diversidad e inclusión en educacion"
              className=" rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              Inclusión y Diversidad
            </h4>
            <p className="text-[var(--color-gray)] text-xl">
              Entendemos la inclusión como un principio esencial y una base
              fundamental para alcanzar la justicia social.
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img1}
              alt="Diversidad e inclusión en educacion"
              className=" rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              Inteligencia colectiva
            </h4>
            <p className="text-[var(--color-gray)] text-xl">
              Fomentamos entornos en los que el acceso al saber es equitativo,
              el diálogo es horizontal y el aprendizaje es permanente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
