<template>
  <section class="hero__section hero__section--flex">
    <h1 class="hero__header">Providing insightful research, analysis, and resources to facilitate
                             informed policy decisions and administration of services</h1>
    <FormSearch v-bind:showIcon="true" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormSearch from "@/components/FormSearch.vue";

export default defineComponent({
  name: "PageHomeSectionHero",
  components: {
    FormSearch,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_page-home-section-hero.scss";
</style>