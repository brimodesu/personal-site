<template>
  <h2
    class="font-major-mono-display text-center text-2xl tracking-[0.20em] opacity-80 mt-10"
  >
    micro projects
  </h2>

  <div v-for="(project, index) of projects" :key="index" class="my-12 relative">
    <div
      class="absolute -top-4 -left-4 border-r-0 border-b-0 border-2 border-l-site-gold border-t-site-gold h-10 w-10"
    />
    <div
      class="absolute -bottom-4 -right-4 border-l-0 border-t-0 border-2 border-r-site-gold border-b-site-gold h-10 w-10"
    />
    <div class="w-full grid md:grid-cols-2 gap-10">
      <div class="grid order-1 md:order-0">
        <h1 class="font-normal text-2xl tracking-[0.20em]">
          {{ project.name }}
        </h1>
        <p class="text-normal">{{ project.description }}</p>

        <NuxtLink
          v-if="project.url"
          :to="project.url"
          target="_blank"
          class="h-8 w-8 my-5"
        >
          <FontAwesomeIcon
            icon="link"
            type="fas"
            class="text-site-red hover:text-site-gold"
          />
        </NuxtLink>
        <div class="text-gray-400">
          <p class="font-thin">tecnologías:</p>
          <div class="flex flex-wrap justify-left ">
            <div
              v-for="(tech, index) of project.tech"
              :key="index"
              class="flex"
            >
              <p class="md:text-sm font-thin tracking-[0.15em]">{{ tech }}</p>
              <div
                v-if="index !== project.tech.length - 1"
                class="rounded-full bg-gray-400 h-1 w-1 self-center mx-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-0 md:order-1">
        <img
          v-if="project.image"
          :src="project.image"
          class="h-72 object-cover rounded shadow"
          alt=""
        />
        <video
          v-if="project.video"
          class="h-72 object-cover rounded shadow"
          controls
        >
          <source :src="project.video" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"],
  data() {
    return {};
  },
  created() {
    console.log(this.projects);
  },
};
</script>

<style></style>
