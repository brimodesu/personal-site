<template>
  <div class="w-full min-h-screen bg-fondo-1 text-white font-roboto">
    <div class="flex max-w-4xl m-auto">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
});
</script>
