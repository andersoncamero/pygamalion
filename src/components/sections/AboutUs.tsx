import { Brain, CheckCircle, Globe, Handshake, Users } from "lucide-react";
import type React from "react";
import { IMAGES } from "../../config/images";

export const AboutUs: React.FC = () => {
  return (
    <div>
      <section className="w-full flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-8 lg:space-y-0 p-8 md:p-10 lg:p-20  m-auto bg-cover">
        <div className="flex-1 space-y-6">
          <h2 className="text-7xl text-[var(--color-dark)]">¿Quiénes somos?</h2>
          <p className="text-lg text-[var(--color-gray)]">
            Somos Pygmalion Education House, un sello educativo especializado en
            la creación, producción y difusión de contenidos que promueven la
            formación de educadores y estudiantes que se ven a sí mismos como
            participantes activos en el cambio social; como diseñadores de
            futuros sociales. Además, brindamos servicios especializados
            dirigidos a instituciones y maestros para facilitar la adopción de
            prácticas pedagógicas efectivas, el desarrollo curricular y el
            fortalecimiento profesional constante.
          </p>
          <p className="text-lg text-[var(--color-gray)]">
            Nuestra labor se fundamenta en el Efecto Pigmalión, es decir,
            reconocemos que las expectativas positivas tienen el poder de
            transformar el desempeño, la motivación y la autoestima. Creemos
            profundamente en el potencial de cada persona y en el impacto de una
            educación que confía, inspira y acompaña.
          </p>
          <div className="space-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--color-dark)]">
                  Efecto Pygmalion
                </h4>
                <p className="text-[var(--color-gray)]">
                  El poder transformador de las expectativas positivas
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--color-dark)]">
                  Educacion Inclusiva
                </h4>
                <p className="text-[var(--color-gray)]">
                  Promovemos el bienestar emocional y la inclusion educativa
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--color-dark)]">
                  Compromiso Etico
                </h4>
                <p className="text-[var(--color-gray)]">
                  Guiados por valores transformadores y responsabilidad social
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://grupogeard.com/wp-content/uploads/2021/05/11.-Trabajo-en-equipo-en-educacion-virtual-como-fomentarlo.png?height=400&width=600"
            alt="Equipo de Pygmalion Education House trabajando con educadores"
            className="w-full h-80 object-cover"
          />
          <div className="bg-[var(--color-primary)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-6 text-[var(--color-light)]">
            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-[var(--color-light)] leading-relaxed">
              Buscamos contribuir a una educación más humana y equitativa, por
              ello el bienestar emocional y la inclusión educativa son ejes
              centrales de nuestro enfoque. Aspiramos a ser un referente en el
              ámbito educativo, no solo por la calidad de nuestros servicios y
              contenidos, sino también por el compromiso ético y transformador
              que guía nuestro quehacer. En Pygmalion Education House creemos
              que cada persona tiene una voz que merece ser escuchada, y un
              camino único de aprendizaje que necesita ser acompañado con
              respeto y dedicación.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-3xl p-8 md:p-16 lg:p-24  m-auto bg-cover">
        <div className="text-center mb-12">
          <h2 className="text-7xl text-[var(--color-dark)] mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
            Los principios que guían nuestro trabajo y definen nuestra identidad
            como organización educativa
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
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
            <p className="text-[var(--color-gray)]">
              Consideramos que juntos construimos conocimiento más sólido, donde cada mente enriquece el saber común.
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
            <p className="text-[var(--color-gray)]">
              Creemos que cada persona merece un espacio donde pueda desarrollar
              su potencial unico
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img3}
              alt="Diversidad e inclusión en educacion"
              className=" rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              Empatía
            </h4>
            <p className="text-[var(--color-gray)]">
              Entendemos que la comprensión mutua convierte el aprendizaje en una experiencia humana y cercana.
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
            <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              Responsabilidad social
            </h4>
            <p className="text-[var(--color-gray)]">
              Valoramos que la educación trasciende las aulas, formando ciudadanos comprometidos con su entorno.
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={IMAGES.values.img5}
              className="rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4"
            />
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              Glocalidad
            </h4>
            <p className="text-[var(--color-gray)]">
              Sabemos que el aprendizaje conecta lo local con lo global, preparando mentes para un mundo diverso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
