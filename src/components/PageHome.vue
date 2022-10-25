<template>
  <section class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                policy decisions and administration of services</p>

    <FormSearch v-bind:showIcon="true" />
  </section>

  <section class="featured-section">
    <div class="flex-container">
      <PageHomeSectionFeatured />
    </div>
  </section>

  <section class="dashboard-section">
    <div class="flex-container">
      <PageHomeSectionDashboard />
    </div>
  </section>

  <section class="services-section">
    <div class="flex-container">
      <PageHomeSectionServices />
    </div>
  </section>

  <section class="updates-section">
    <div class="flex-container">
      <PageHomeSectionUpdates />
      <PageHomeSectionEvents />
    </div>
  </section>

  <section class="news-section">
    <div class="flex-container">
      <PageHomeSectionNews />
    </div>
  </section>

  <div class="top-return">
    <div class="flex-container">
      <a class="__link-style-2" v-on:click="handleReturnTop">
        Back to Top
        <span class="icon-background">
          <Icon icon="mdi:chevron-up" width="28" color="rgb(0, 116, 193)" />
        </span>
      </a>
    </div>
  </div>
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
  },
  methods: {
    handleReturnTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/_page-home.scss";
</style>