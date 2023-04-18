import {defineNuxtConfig} from "nuxt/config";

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
    modules: [
        "@nuxtjs/tailwindcss",
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: [
            {
                code: 'es',
                file: 'es-ES.js'
            }
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'es',
        warnHtmlMessage: false,
        precompile: {
            strictMessage:false,
            escapeHtml:true
        }
    }
});
