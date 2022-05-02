<template>
  <div class="border-site-red border-l-2" >
    <h1
      class="font-thin font-major-mono-display text-3xl md:text-5xl whitespace-pre-line tracking-[.30em] glitch middle"
      v-bind:data-text="title"
    >
      {{ title }}
    </h1>
  </div>

  <!-- <h1
    class="font-thin font-major-mono-display text-white text-5xl tracking-[.30em] border-site-red border-l-2 my-2 whitespace-pre-line"
  >
    {{ title }}
  </h1> -->
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
