import type React from "react";

interface CollageImage {
  id?: number;
  src: string;
  alt: string;
}

interface CollageProps {
  images?: CollageImage[];
}

export const ImageCollage: React.FC<CollageProps> = ({ images }) => {
  const defaultImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1494790108755-2616c2e9b7d8?w=400&h=300&fit=crop",
      alt: "Mujer sonriente con gafas",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
      alt: "Estudiante escribiendo",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
      alt: "Mujer joven sonriendo",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      alt: "Niños estudiando con laptop",
    },
  ];

  const displayImages = images || defaultImages;

  return (
    <div className="w-full max-w-xl mx-auto p-4 rounded-[30px] relative">
      <div className="relative pt-[125%] md:pt-[115%] lg:pt-[120%]">
        <div className="absolute inset-0 flex flex-col gap-4">

          <div className="flex flex-row gap-4 flex-[3] min-h-0">
            <div className="w-2/3 h-full rounded-[20px] overflow-hidden flex-shrink-0">
              <img
                src={displayImages[0]?.src || "/placeholder.svg"}
                alt={displayImages[0]?.alt}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-4 h-full flex-shrink-0">
              <div className="flex-[1] rounded-[20px] overflow-hidden">
                <img
                  src={displayImages[1]?.src || "/placeholder.svg"}
                  alt={displayImages[1]?.alt}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div
                className="flex-[1.5] rounded-[20px] bg-[var(--color-primary)]/50"

              ></div>
            </div>
          </div>


          <div className="flex flex-row gap-4 flex-[2] min-h-0">

            <div className="w-2/3 flex flex-row gap-2 h-full flex-shrink-0">

              <div
                className="w-2/4 h-full rounded-[20px] flex-shrink-0 bg-[var(--color-red)]"
              />


              <div className="w-1/2 flex flex-col gap-4 h-full flex-shrink-0">
                <div
                  className="flex-1 rounded-[20px] bg-[var(--color-orange)]/90"
                />

                <div className="flex-1 rounded-[20px] overflow-hidden">
                  <img
                    src={displayImages[3]?.src || "/placeholder.svg"}
                    alt={displayImages[3]?.alt}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>


            <div className="w-1/3 h-full rounded-[20px] overflow-hidden flex-shrink-0">
              <img
                src={displayImages[2]?.src || "/placeholder.svg"}
                alt={displayImages[2]?.alt}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
