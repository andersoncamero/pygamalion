const CDN_BASE_URL = import.meta.env.VITE_CDN_BASE_URL;

if (!import.meta.env.VITE_CDN_BASE_URL) {
  console.warn('⚠️ VITE_CDN_BASE_URL no está configurada, usando URL por defecto');
}


export const IMAGES = {
    hero:{
        img1: `${CDN_BASE_URL}/images/hero/img-1.webp`,
        img2: `${CDN_BASE_URL}/images/hero/img-2.webp`,
        img3: `${CDN_BASE_URL}/images/hero/img-3.webp`,
        img4: `${CDN_BASE_URL}/images/hero/img-4.webp`,
    },

    carousel: {
        img1: `${CDN_BASE_URL}/images/carousel/img-1.webp`,
        img2: `${CDN_BASE_URL}/images/carousel/img-2.webp`,
        img3: `${CDN_BASE_URL}/images/carousel/img-3.webp`,
        img4: `${CDN_BASE_URL}/images/carousel/img-4.webp`,
        img5: `${CDN_BASE_URL}/images/carousel/img-5.webp`,
    },

    logos: {
        icono: `${CDN_BASE_URL}/images/logos/logo-1.webp`,
        white: `${CDN_BASE_URL}/images/logos/logo.webp`,
        black: `${CDN_BASE_URL}/images/logos/logo-FN.webp`,
        blue: `${CDN_BASE_URL}/images/logos/logo-FA.webp`,
    },

    values: {
        img1: `${CDN_BASE_URL}/images/values/img-1.webp`,
        img2: `${CDN_BASE_URL}/images/values/img-2.webp`,
        img3: `${CDN_BASE_URL}/images/values/img-3.webp`,
        img4: `${CDN_BASE_URL}/images/values/img-4.webp`,
        img5: `${CDN_BASE_URL}/images/values/img-5.webp`,
    },

    aboutUs: {
        img1: `${CDN_BASE_URL}/images/about-us/img-1.webp`,
    }
}