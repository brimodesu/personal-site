<template>
  <nav class="my-10 px-4 md:px-0 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <NuxtLink
        :to="localePath('/')"
        class="font-major-mono-display text-3xl leading-normal"
        :class="color"
        >{{ title }}</NuxtLink
      >
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-lg text-site-gold-2 md:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
        @click="toggleMenu()"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-10 h-10"
          :class="{ hidden: !isActive }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="w-10 h-10"
          :class="{ hidden: isActive }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="w-full md:block md:w-auto"
        id="mobile-menu"
        :class="{ hidden: isActive }"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:tex-lg font-thin tracking-[.40em]"
        >
          <li>
            <NuxtLink
              :to="localePath('gamedev')"
              activeClass="text-site-red"
              class="block py-2 pr-4 pl-3 md:p-0 hover:text-site-gold"
            >
              GAME
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                    :to="localePath('developer')"
              activeClass="text-site-red"
              class="block py-2 pr-4 pl-3 md:p-0 hover:text-site-gold"
              >EXPERIENCE</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="localePath('portfolio')"
              activeClass="text-site-red"
              class="block py-2 pr-4 pl-3 md:p-0 hover:text-site-gold"
              >PORTFOLIO</NuxtLink
            >
          </li>
          <!-- <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<script>
export default {
  props: {
    title: String,
    color: String,
  },
  data() {
    return { isActive: true };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
