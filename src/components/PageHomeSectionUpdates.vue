<template>
  <section class="updates updates--flex">
    <h1 class="updates__header">Recent Updates</h1>

    <ul class="updates__items">
      <template v-for="update in updates" :key="update.id">
        <li class="updates__item">
          <a :href="update.link">
            {{ update.title }}
          </a>
          <p>
            <span>Updated:</span> {{ update.date }}
          </p>
        </li>
      </template>
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