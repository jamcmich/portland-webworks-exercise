<template>
  <section class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                policy decisions and administration of services</p>

    <form id="search-form" class="search-form">
      <label></label>
      <input class="__text" placeholder="Search rfa.sc.gov" />
      <button class="__button __solid" form="search-form" type="submit">Apply</button>
    </form>
  </section>

  <section class="featured-section">
    <div class="flex-container">
      <HomeFeatured />
    </div>
  </section>

  <section class="dashboard-section">
    <div class="flex-container">
      <HomeAnalytics />
    </div>
  </section>

  <section class="services-section">
    <div class="flex-container">
      <HomeServices />
    </div>
  </section>

  <section class="updates-section">
    <div class="flex-container">
      <HomeUpdates />
      <HomeEvents />
    </div>
  </section>

  <section class="news-section">
    <div class="flex-container">
      <HomeNews />
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

import HomeFeatured from "../components/HomeFeatured.vue";
import HomeAnalytics from "../components/HomeAnalytics.vue";
import HomeServices from "../components/HomeServices.vue";
import HomeUpdates from "../components/HomeUpdates.vue";
import HomeEvents from "../components/HomeEvents.vue";
import HomeNews from "../components/HomeNews.vue";

export default {
  name: "Home",
  components: {
    Icon,
    HomeFeatured,
    HomeAnalytics,
    HomeServices,
    HomeUpdates,
    HomeEvents,
    HomeNews,
  },
  methods: {
    handleReturnTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    },
  },
};
</script>

<style lang="scss">
@import "../styles/pages/home-page";
</style>