<template>
  <a class="__card card" v-for="item in featured" :key="item.id" :href="item.link">
    <img :src="`https://jamcmich.github.io/portland-webworks-exercise${item.img}`" :alt="item.alt" />
    <p>{{ item.title }}</p>
  </a>
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