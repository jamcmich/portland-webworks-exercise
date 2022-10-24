<template>
  <h3 class="__header-style-2">News and Press Releases</h3>

  <div class="cards-container">
    <div class="__card card" v-for="item in news" :key="item.id">
      <a class="__link-style-1" :href="item.link"><h3 class="__card-header">{{ item.title }}</h3></a>
      <span class="__h4">{{ item.date }}</span>
      <p class="__text">{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../../../data/news.json";

export default defineComponent({
  name: "SectionNews",
  data() {
    return {
      news: json.news,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/components/home-news";
</style>