<template>
  <section class="updates">
    <h1>Recent Updates</h1>

    <ul class="updates__list">
      <li class="updates__list-item" v-for="update in updates" :key="update.id">
        <a :href="update.link">
          {{ update.title }}
        </a>
        <p>
          <span>Updated:</span> {{ update.date }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../data/updates.json";

export default defineComponent({
  name: "SectionUpdates",
  data() {
    return {
      updates: json.updates,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_page-home-section-updates.scss";
</style>