<template>
    <div>
        <HomeAbout/>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "home",
    title: 'pages.title.home',
    description:'Game and FullStack Developer'
});
</script>

<script>
export default {
    data() {
        return {nameRotate: "Carrera"};
    },
    mounted() {
    },
};
</script>