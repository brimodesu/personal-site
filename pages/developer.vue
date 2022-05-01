<template>
  <div>
    <PageTitle title="deVel0per expeRience" />
    <p class="mt-10 md:w-4/5 tracking-[0.15em] leading-7">
      {{ $t("developerExperience") }}
    </p>

    <div class="h-72 my-10">
      <!-- <div
        class="h-72 w-72 bg-gradient-to-b from-site-gold-2 rounded-3xl absolute left-2/4"
      ></div> -->
      <div class="image-container left-[15%] md:left-[30%] w-72">
        <img
          src="~/assets/images/experience/01.png"
          class="h-72 w-72 object-cover rotate-6"
          alt=""
        />
        <img
          src="~/assets/images/experience/02.png"
          class="h-72 w-72 object-cover -rotate-6"
          alt=""
        />
        <img
          src="~/assets/images/experience/03.png"
          class="h-72 w-72 object-cover absolute rotate-6"
          alt=""
        />
        <img
          src="~/assets/images/experience/04.png"
          class="h-72 w-72 object-cover -rotate-6"
          alt=""
        />
      </div>
    </div>

    <DeveloperExperienceJobs />
    <PageTitle title="skillZ" />
    <DeveloperExperienceSkills />
  </div>
</template>
<script>
definePageMeta({
  layout: "description",
});
</script>
