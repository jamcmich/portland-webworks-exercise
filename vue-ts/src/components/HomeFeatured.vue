<template>
  <div class="__card card" v-for="item in featured" :key="item.id">
    <img :src="`https://jamcmich.github.io/portland-webworks-exercise${item.img}`" :alt="item.alt" />
    <p>{{ item.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../../data/featured.json";

export default defineComponent({
  name: "HomeFeatured",
  data() {
    return {
      featured: json.featured,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/components/_home-featured";
</style>