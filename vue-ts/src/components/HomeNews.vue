<template>
  <h3 class="__header-style-2">Upcoming Events</h3>

  <div class="cards-container">
    <div class="card" v-for="item in news" :key="item.id">
      <h3 class="__link-style-2">{{ news.title }}</h3>
      <span>{{ news.date }}</span>
      <p>{{ news.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../../data/news.json";

export default defineComponent({
  name: "HomeNews",
  components: {
    news: json.news,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/components/_home-news";
</style>