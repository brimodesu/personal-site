<template>
  <h2
    class="font-major-mono-display text-center text-2xl tracking-[0.20em] opacity-80 mt-10"
  >
    <p
      class="text-xl tracking-[.20em] font-light"
      v-html="$t('microProjects')"
    ></p>
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

            class="text-site-red hover:text-site-gold"
          />
        </NuxtLink>
        <div class="text-gray-400">
          <p class="font-thin">tecnologías:</p>
          <DotSeparatorList
            :list="project.tech"
            :textClasses="'md:text-sm font-thin'"
            :dotClasses="'mx-1'"
          />
        </div>
      </div>
      <div class="order-0 md:order-1" v-on:click="viewMedia(project)">
        <img
          v-if="project.image"
          :src="project.image"
          class="h-72 object-cover rounded shadow mx-auto"
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

    <div v-if="mediaModalOpen"
         id="modal"
         class="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
    >
        <!-- The close button -->
        <div
                class="fixed z-90 top-6 right-8 text-white text-5xl font-bold hover:cursor-pointer"
                @click="closeModal()"
        >&times;</div
        >

        <!-- A big image will be displayed here -->
        <img id="modal-img" class="max-w-[800px] max-h-[600px] object-cover" :src="selectedProject.image" />
    </div>
</template>

<script>
export default {
    props: ["projects"],
    data() {
        return {
            mediaModalOpen: false,
            selectedProject: {}
        };
    },
    created() {
        //console.log(this.projects);
    },
    methods: {
        viewMedia: function (event) {
            console.log(event)
            this.selectedProject = event
            this.mediaModalOpen = true
        },
        closeModal: function() {
            console.log("close?")
            this.mediaModalOpen = false
        }
    },
};
</script>

<style></style>
