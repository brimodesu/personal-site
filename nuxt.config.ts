import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
  buildModules: ["@nuxtjs/tailwindcss"],
});
