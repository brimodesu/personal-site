<template>
    <div class="flex">
        <NuxtLink
                v-for="(locale, index) of locales"
                :key="index"
                :to="switchLocalePath(locale.code)"
                class="flex"
        >
            <p
                    class="text-xl uppercase cursor-pointer mx-2"
                    :class="{ 'text-site-red': locale.code === selectedLocale }"
            >
                {{ locale.code }}
            </p>
            <div
                    v-if="index !== locales.length - 1"
                    class="h-4 border-site-gold-2 border mx-2 self-center"
            ></div>
        </NuxtLink>
    </div>
</template>

<script setup>
const {locales, locale: selectedLocale, setLocale} = useI18n();
const switchLocalePath = useSwitchLocalePath()
</script>

