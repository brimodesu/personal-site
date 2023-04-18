import {defineNuxtConfig} from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        GTAG: "",
        public:{
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://brimo.quest',
            siteName: 'brimo.quest',
            siteDescription: 'Game Developer',
            language: 'es-ES'
        }
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
                iso: 'es-ES',
                file: 'es-ES.js'
            },
            {
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            }
        ],
        baseUrl:'https://brimo.quest',
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'es',
        precompile: {
            strictMessage: false,
        }
    },
});
