<template>
    <div class="w-full">
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
        <Head>
            <Title>{{ title }}</Title>
            <template v-for="link in head.link" :key="link.id">
                <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang"/>
            </template>
            <template v-for="meta in head.meta" :key="meta.id">
                <Meta :id="meta.id" :property="meta.property" :content="meta.content"/>
            </template>
        </Head>
        <GlobalTopNavBar title="david" color="text-site-gold-2"/>
        <NuxtPage/>
        <GlobalFooter/>
        </Html>
    </div>
</template>

<script setup>
const route = useRoute()
const {t} = useI18n()
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})
const title = computed(() => t(route.meta.title ?? 'TBD'))
</script>

<script>
export default {
    name: "description",
};
</script>
