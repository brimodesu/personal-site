<template>
  <div>
    <Head>
      <Title>David Carrera | PORTFOLIO</Title>
    </Head>
    <GlobalPageTitle title="portfolio" />
    <PortfolioMicro :projects="projects" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "description",
});
</script>

<script>
import projects from "@/assets/data/projects.json";
export default {
  data() {
    return { projects };
  },
  created() {
    // console.log(this.projects);
  },
};
</script>
