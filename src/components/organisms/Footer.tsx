import type React from "react";

import { Logo } from "../atoms/Logo";
import { Copyright } from "../atoms/Copyright";
import { SocialLinks } from "../molecules/SocialLinks";
import { FooterLinks } from "../molecules/FooterLinks";
import { Typography } from "../atoms/Typography";
import { IMAGES } from "../../config/images";

export const Footer: React.FC = () => {
  const socialItems = [
    { icon: "https://img.icons8.com/?size=100&id=964RahB4l606&format=png&color=000000", alt: "WhatsApp", url: "https://wa.me/1234567890" },
    { icon: "https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000", alt: "Facebook", url: "https://facebook.com" },
    { icon: "https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000", alt: "Instagram", url: "https://instagram.com" },
    { icon: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000", alt: "LinkedIn", url: "https://linkedin.com" },
    { icon: "https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=000000", alt: "TikTok", url: "https://tiktok.com" }
  ];

  const contactLinks = [
    { label: "Asesorías" },
    { label: "Desarrollo profesional" },
    { label: "Diseño de recursos" },
    { label: "Zona glossa" },
    { label: "Ventas" }
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-light)] pt-8 px-10 md:px-18 lg:px-30 m-auto bg-cover">
      <div className="container mx-auto px-4 items-center">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 mb-8">
          <div className="md:flex-1 max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="rounded-xl flex items-center justify-center">
                <Logo src={IMAGES.logos.blue} className="w-80 h-auto" />
              </div>
            </div>
            <Typography variant="p" className="text-[var(--color-light)] text-lg sm:text-md md:text-lg lg:text-xl">
              Tejemos mundos que acogen la diferencia, una voz a la vez.
            </Typography>
          </div>

          <SocialLinks items={socialItems} />

          <FooterLinks title="Contacto" links={contactLinks} />
        </div>

        <Copyright year={2026} />
      </div>
    </footer>
  );
};
