<template>
  <section class="featured featured--flex">
    <div class="featured__container featured__container--grid">
      <a class="featured__card" v-for="item in featured" :key="item.id" :href="item.link">
        <img class="featured__img"
             :src="`https://jamcmich.github.io/portland-webworks-exercise${item.img}`"
             :alt="item.alt" />
        <p class="featured__title">{{ item.title }}</p>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../data/featured.json";

export default defineComponent({
  name: "SectionFeatured",
  data() {
    return {
      featured: json.featured,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_page-home-section-featured.scss";
</style>