<template>
  <div v-for="link in links" :key="link.id">
    <div class="row">
      <h2 class="__header-style-2">
        <a :href="link.heading.url">
          {{ link.heading.title }}
        </a>
      </h2>

      <button v-on:click="handleToggleIcon(link.id)">
        <Icon :icon="toggleIcon && link.id === componentId ? 'mdi:chevron-down' : 'mdi:chevron-up'"
              color="white"
              width="32" />
      </button>
    </div>

    <ul :class="toggleIcon ? 'extended' : ''">
      <li v-for="item in link.items">
        <a class="__link-style-2 __text item" :href="item.url">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import json from "../../data/links.json";

export default defineComponent({
  name: "AppNavbarLinkExpansion",
  props: {
    links: Object,
  },
  components: {
    Icon,
  },
  data() {
    return {
      links: json.links,
      componentId: 0,
      toggleIcon: false,
    };
  },
  methods: {
    handleToggleIcon(id: number) {
      this.componentId = id;
      this.toggleIcon = !this.toggleIcon;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/components/_app-navbar-link-expansion";
</style>