<template>
    <div>
        <Head>
            <Title>David Carrera | START</Title>
        </Head>
        <HomeAbout/>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "home",
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