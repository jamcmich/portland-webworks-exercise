<template>
  <section class="hero">
    <div class="hero__content">
      <h2 class="content__header">Providing insightful research, analysis, and resources to facilitate
                                  informed policy decisions and administration of services</h2>
      <FormSearch class="content__form" v-bind:showIcon="true" />
    </div>
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