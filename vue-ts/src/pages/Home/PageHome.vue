<template>
  <section class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                policy decisions and administration of services</p>

    <FormSearch v-bind:showIcon="true" />
  </section>

  <section class="featured-section">
    <div class="flex-container">
      <SectionFeatured />
    </div>
  </section>

  <section class="dashboard-section">
    <div class="flex-container">
      <SectionDashboard />
    </div>
  </section>

  <section class="services-section">
    <div class="flex-container">
      <SectionServices />
    </div>
  </section>

  <section class="updates-section">
    <div class="flex-container">
      <SectionUpdates />
      <SectionEvents />
    </div>
  </section>

  <section class="news-section">
    <div class="flex-container">
      <SectionNews />
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
import { Icon } from "@iconify/vue";

import FormSearch from "../../components/Forms/FormSearch.vue";
import SectionFeatured from "./SectionFeatured.vue";
import SectionDashboard from "./SectionDashboard.vue";
import SectionServices from "./SectionServices.vue";
import SectionUpdates from "./SectionUpdates.vue";
import SectionEvents from "./SectionEvents.vue";
import SectionNews from "./SectionNews.vue";

export default {
  name: "Home",
  components: {
    Icon,
    FormSearch,
    SectionFeatured,
    SectionDashboard,
    SectionServices,
    SectionUpdates,
    SectionEvents,
    SectionNews,
  },
  methods: {
    handleReturnTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/pages/home-page";
</style>