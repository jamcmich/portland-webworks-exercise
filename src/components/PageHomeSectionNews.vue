<template>
  <section class="news news--flex">
    <div class="news__container news__container--flex">
      <h1 class="news__header">News and Press Releases</h1>

      <div class="news__cards news__cards--flex">
        <div class="news__card" v-for="item in news" :key="item.id">
          <a :href="item.link"><h3 class="__card-header">{{ item.title }}</h3></a>
          <span>{{ item.date }}</span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../data/news.json";

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
@import "@/styles/_page-home-section-news.scss";
</style>