<template>
  <div class="flex">
    <div
      v-for="(locale, index) of availableLocales"
      :key="index"
      @click="switchLocale(locale)"
      class="flex"
    >
      <p
        class="text-lg uppercase cursor-pointer space-x-2"
        :class="{ 'text-site-red': locale === $i18n.locale }"
      >
        {{ locale }}
      </p>
      <div
        v-if="index !== availableLocales.length - 1"
        class="h-4 border-site-gold-2 border mx-2 self-center"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.availableLocales;
    },
  },
  methods: {
    switchLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
