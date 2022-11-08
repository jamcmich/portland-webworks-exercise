<template>
  <section class="news">
    <div class="news__content">
      <h1>News and Press Releases</h1>

      <div class="content__cards">
        <div class="content__card" v-for="item in news" :key="item.id">
          <h2><a :href="item.link">{{ item.title }}</a></h2>

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