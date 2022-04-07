<template>
  <h1
    class="font-thin font-major-mono-display text-white text-5xl tracking-[.30em] border-site-red border-l-2 my-2"
  >
    {{ title }}
  </h1>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
