<template>
  <div class="w-full flex items-center my-10">
    <!-- <div class="rounded-full border-2 border-site-red h-5 w-5"></div> -->
    <Locale />
    <div class="grow border-site-gold-2 border h0 self-center mx-4"></div>
    <div class="flex space-x-5">
      <NuxtLink to="https://brimo.itch.io/" target="_blank">
        <FontAwesomeIcon
          icon="itch-io"
          type="fab"
          class="text-site-red h-5 w-5 hover:text-site-gold"
        />
      </NuxtLink>
      <NuxtLink to="https://github.com/brimodesu" target="_blank">
        <FontAwesomeIcon
          icon="github"
          type="fab"
          class="text-site-red h-5 w-5 hover:text-site-gold"
        />
      </NuxtLink>
      <NuxtLink to="https://twitter.com/brimodesu" target="_blank">
        <FontAwesomeIcon
          icon="twitter"
          type="fab"
          class="text-site-red h-5 w-5 hover:text-site-gold"
        />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/vurimo/" target="_blank">
        <FontAwesomeIcon
          icon="linkedin"
          type="fab"
          class="text-site-red h-5 w-5 hover:text-site-gold"
        />
      </NuxtLink>
    </div>
  </div>
</template>
