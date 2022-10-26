<template>
  <section class="hero">
    <h4 class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                 policy decisions and administration of services</h4>
    <FormSearch v-bind:showIcon="true" />
  </section>

  <PageHomeSectionFeatured />
  <PageHomeSectionDashboard />
  <PageHomeSectionServices />

  <div class="row">
    <PageHomeSectionUpdates />
    <PageHomeSectionEvents />
  </div>

  <PageHomeSectionNews />
  <AppScrollTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import FormSearch from "@/components/FormSearch.vue";
import PageHomeSectionFeatured from "@/components/PageHomeSectionFeatured.vue";
import PageHomeSectionDashboard from "@/components/PageHomeSectionDashboard.vue";
import PageHomeSectionServices from "@/components/PageHomeSectionServices.vue";
import PageHomeSectionUpdates from "@/components/PageHomeSectionUpdates.vue";
import PageHomeSectionEvents from "@/components/PageHomeSectionEvents.vue";
import PageHomeSectionNews from "@/components/PageHomeSectionNews.vue";
import AppScrollTop from "./AppScrollTop.vue";

export default defineComponent({
  name: "PageHome",
  components: {
    Icon,
    FormSearch,
    PageHomeSectionFeatured,
    PageHomeSectionDashboard,
    PageHomeSectionServices,
    PageHomeSectionUpdates,
    PageHomeSectionEvents,
    PageHomeSectionNews,
    AppScrollTop,
  },
});
</script>

<style lang="scss">
@import "@/styles/_page-home.scss";
</style>