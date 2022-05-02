<template>
  <div v-for="(job, index) of jobs" :key="index" class="my-10">
    <div class="w-full">
      <h2
        class="font-major-mono-display text-center text-2xl tracking-[0.20em] opacity-80"
      >
        {{ job.company }} {{ job.period }}
      </h2>
      <p
        v-for="(activity, index) of job.activities[$i18n.locale]"
        :key="index"
        class="my-8 font-thin tracking-[0.20em]"
      >
        {{ activity }}
      </p>
    </div>
  </div>
</template>
<script>
import jobs from "@/assets/data/jobs.json";
export default {
  data() {
    return { jobs };
  },
};
</script>
