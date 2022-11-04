<template>
  <PageHomeSectionHero />
  <PageHomeSectionFeatured />
  <PageHomeSectionDashboard />
  <PageHomeSectionServices />

  <div class="home__updates-and-events home__updates-and-events--flex">
    <PageHomeSectionUpdates />
    <PageHomeSectionEvents />
  </div>

  <PageHomeSectionNews />
  <AppScrollTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import PageHomeSectionHero from "@/components/PageHomeSectionHero.vue";
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
    PageHomeSectionHero,
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