import React from "react";
import { ValueCard } from "../../molecules/ValueCard";
import { IMAGES } from "../../../config/images";
import { Brain, Globe, Handshake, Heart, Users } from "lucide-react";

export const Values: React.FC = () => {
    const valuesData = [
        {
            imageSrc: IMAGES.values.img5,
            Icon: Globe,
            title: "Glocalidad",
            description: "Somos conscientes de nuestro entorno inmediato, y al mismo tiempo, orientamos nuestro actuar con una mirada global."
        },
        {
            imageSrc: IMAGES.values.img4,
            Icon: Handshake,
            title: "Responsabilidad social",
            description: "Asumimos un compromiso activo con el bienestar colectivo, guiados por principios de ética, solidaridad y sostenibilidad."
        },
        {
            imageSrc: IMAGES.values.img3,
            Icon: Heart,
            title: "Empatía",
            description: "Actuamos con sensibilidad y justicia, promoviendo entornos educativos basados en el respeto, la equidad y la dignidad humana."
        },
        {
            imageSrc: IMAGES.values.img2,
            Icon: Users,
            title: "Inclusión y Diversidad",
            description: "Entendemos la inclusión como un principio esencial y una base fundamental para alcanzar la justicia social."
        },
        {
            imageSrc: IMAGES.values.img1,
            Icon: Brain,
            title: "Inteligencia colectiva",
            description: "Fomentamos entornos en los que el acceso al saber es equitativo, el diálogo es horizontal y el aprendizaje es permanente."
        }
    ];

    return (
        <section className="bg-[var(--color-light)] rounded-3xl px-8 md:px-16 lg:px-20 pt-0.5 pb-8 md:pb-16 lg:pb-20 m-auto bg-cover">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark)] mb-4">
                    Valores fundamentales
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-gray)] mx-auto">
                    Nuestras acciones están orientadas por valores que inspiran la construcción de una sociedad más empática, equitativa y reflexiva.
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
                {valuesData.map((value, index) => (
                    <ValueCard key={index} {...value} />
                ))}
            </div>
        </section>
    );
};
