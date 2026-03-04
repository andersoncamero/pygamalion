import React, { useState } from "react";
import { motion } from "motion/react";
import { CardCarousel } from "../organisms/CardCarousel";

interface HeroGalleryProps {
    images: {
        src: string;
        alt: string;
        title: string;
    }[];
    isVisible: boolean;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({ images, isVisible }) => {
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const carouselImages = [...images, ...images, ...images];

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
        >
            <div className="my-8 sm:my-12">
                <div className="overflow-hidden w-full">
                    <div
                        className={`flex whitespace-nowrap ${isPaused ? "animate-scroll-paused" : "animate-scroll"
                            }`}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {carouselImages.map((img, index) => (
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
    );
};
