<template>
  <div class="flex flex-wrap" :class="listClasses">
    <div v-for="(item, index) of list" :key="index" class="flex my-2">
      <p class="md:text-lg tracking-[0.15em]" :class="textClasses">
        {{ item }}
      </p>
      <div
        v-if="index !== list.length - 1"
        class="rounded-full bg-site-red h-1 w-1 self-center"
        :class="dotClasses"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "textClasses", "listClasses", "dotClasses"],
};
</script>

<style></style>
