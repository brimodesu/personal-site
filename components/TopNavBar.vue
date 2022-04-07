<template>
  <nav class="w-full max-w-4xl font-thin flex my-10">
    <NuxtLink to="/">
      <h1 class="font-major-mono-display text-site-gold-2 text-3xl leading-normal">
        brimo
      </h1>
    </NuxtLink>
    <div class="grow"></div>
    <div class="space-x-5 tracking-[.40em]">
      <NuxtLink
        to="/gamedev"
        activeClass="text-site-red"
        class="hover:text-site-gold"
        >GAME</NuxtLink
      >
      <NuxtLink
        to="/developer"
        activeClass="text-site-red"
        class="hover:text-site-gold"
        >DEVELOPER</NuxtLink
      >
    </div>
  </nav>
</template>
