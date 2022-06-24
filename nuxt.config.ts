import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    GTAG: "",
  },
  meta: {
    title: "David Carrera",
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap",
      },
    ],
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/border-image.css",
    "@/assets/css/glitch-effect.css",
    "@/assets/css/slider.css",
    "@/assets/css/index.css",
  ],
  components: ["~/components"],
  plugins: [],
  buildModules: ["@nuxtjs/tailwindcss", "@intlify/nuxt3", "nuxt-seo"],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "es",
    },
  },
  seo: {
    baseUrl: "https://brim01.netlify.app/",
    name: "David Carrera",
    title: "Desarrollador de Software",
    keywords: "Guatemala, GameDev, Unity3D, ReactJS",
    templateTitle: "%name% - %title%",
    description: "Desarrollador Unity y React Js",
    canonical: "auto",
    isForcedTrailingSlash: false,
    twitter: {
      site: "@vurimo",
      creator: "@vurimo",
      card: "summary",
    },
  },
});
