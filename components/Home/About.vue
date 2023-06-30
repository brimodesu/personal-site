<template>
  <div class="sm:my-5 md:my-10 grid grid-cols-1 md:grid-cols-2 max-w-4xl">
    <figure class="snip1113 red">
      <img  src="~/assets/images/home2.jpeg" alt="" srcset="" class="w-96" />
      <figcaption>
        <h3>david <span>carrera</span></h3>
        <h4>brimo</h4>
      </figcaption>
    </figure>

    <div class="py-8 my-auto">
      <p
        class="text-xl tracking-[.20em] font-light"
        v-html="$t('homeAbout')"
      ></p>
    </div>
  </div>
</template>
