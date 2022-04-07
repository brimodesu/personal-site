<template>
  <div class="flex flex-wrap justify-center my-10 max-w-3xl mx-auto">
    <div v-for="(skill, index) of skills" :key="index" class="flex my-2">
      <p class="text-2xl tracking-[0.15em]">{{ skill }}</p>
      <div
        v-if="index !== skills.length - 1"
        class="rounded-full bg-site-red h-1 w-1 self-center mx-5"
      ></div>
    </div>
  </div>
</template>

<script>
import skills from "@/assets/data/skills.json";
export default {
  data() {
    return { skills };
  },
};
</script>
