<template>
  <DotSeparatorList
    :list="skills"
    :listClasses="'justify-center my-10 max-w-3xl mx-auto'"
    :dotClasses="'mx-5'"
  />
</template>

<script>
import skills from "@/assets/data/skills.json";
export default {
  data() {
    return { skills };
  },
};
</script>
