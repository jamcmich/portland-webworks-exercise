<template>
  <div class="updates">
    <h3 class="__header-style-2">Recent Updates</h3>

    <ul>
      <li v-for="update in updates" :key="update.id">
        <a class="__link-style-1" :href="update.link">
          {{ update.title }}
        </a>
        <p>
          <span>Updated:</span> {{ update.date }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import json from "../../../data/updates.json";

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
@import "../../styles/components/home-updates";
</style>