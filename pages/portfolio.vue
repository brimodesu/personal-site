<template>
    <div>
        <GlobalPageTitle title="portfolio"/>
        <PortfolioPublic :projects="publicProjects"/>
        <PortfolioMicro :projects="microProjects"/>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "description",
    title:'pages.title.portfolio'
});
</script>

<script>
import projects from "@/assets/data/projects.json";

export default {
    data() {
        return {
            publicProjects: projects.filter((p) => p.tag === "public"),
            microProjects: projects.filter((p) => p.tag === "micro"),
        };
    },
    created() {
        // console.log(this.projects);
    },
};
</script>
