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
    plugins: [],
    modules: [
        "@nuxtjs/tailwindcss",
        '@nuxtjs/i18n',
    ],
    extends:[
        'nuxt-seo-kit'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    i18n: {
        locales: [
            {
                code: 'es',
                file: 'es-ES.js'
            },
            {
                code: 'en',
                file: 'en-EN.js'
            }
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'es',
        warnHtmlMessage: false,
        precompile: {
            strictMessage: false,
        }
    },
    public:{
        siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://brimo.quest',
        siteName: 'David Carrera',
        siteDescription: 'Game Developer',
        language: 'es-ES'
    }
});
