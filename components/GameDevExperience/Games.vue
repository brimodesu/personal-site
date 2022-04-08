<template>
  <div
    v-for="(game, index) of games"
    :key="index"
    class="my-10 space-y-5 flex flex-col"
  >
    <h2
      class="font-major-mono-display text-left text-2xl tracking-[0.20em] opacity-80"
    >
      {{ game.title }}
    </h2>
    <p class="w-3/5 tracking-[0.20em]">{{ game.description }}</p>
    <img :src="`./assets/images/${game.screenshots[0]}`" />
    <button
      class="h-14 w-56 border border-site-gold-2 text-site-gold-2 hover:text-site-red hover:border-site-red tracking-[0.20em] place-self-end"
    >
      DETAILS SITE
    </button>
  </div>
</template>
<script>
import games from "@/assets/data/games.json";
export default {
  data() {
    return { games };
  },
};
</script>
