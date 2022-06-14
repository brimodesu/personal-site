<template>
  <div v-for="(item, index) of resources" :key="index" class="my-5">
    <a
      class="text-site-gold hover:text-site-red"
      :href="item.url"
      :download="item.label"
      target="_blank"
    >
      <div class="w-full flex">
        <p class="font-thin tracking-[0.20em] mr-4">
          {{ item.label }}
        </p>
        <FontAwesomeIcon
          icon="download"
          type="fas"
          class="h-5 w-5 hover:text-site-gold"
        />
      </div>
    </a>
  </div>
</template>

<script>
import resources from "@/assets/data/resources.json";
export default {
  data() {
    return { resources };
  },
};
</script>
