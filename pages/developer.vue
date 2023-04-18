<template>
    <div>
        <GlobalPageTitle title="deVel0per expeRience"/>
        <p
                class="mt-10 md:w-4/5 tracking-[0.15em] leading-7"
                v-html="$t('developerExperience')"
        ></p>

        <div class="h-72 my-10">
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

        <DeveloperExperienceJobs/>
        <GlobalPageTitle title="skillZ"/>
        <DeveloperExperienceSkills/>
        <GlobalPageTitle title="Resources"/>
        <DeveloperExperienceResources/>
    </div>
</template>

<script>
definePageMeta({
    layout: "description",
    title: "pages.title.developer",
});
</script>