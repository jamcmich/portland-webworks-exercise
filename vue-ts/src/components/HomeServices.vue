<template>
  <div class="services">
    <h3 class="__header-style-3">Popular Services and Links</h3>

    <div class="column">
      <p class="item" v-for="service in services" :key="service.id">
        <a class="__link-style-1" :href="service.link">
          {{ service.title }}
        </a>
        <Icon v-if="!service.link.includes('https://rfa.sc.gov/')" icon="mdi:open-in-new" width="20"
              color="rgb(117, 117, 117)" />
        <Icon v-if="service.link.includes('.pdf')" icon="mdi:file-document-outline" width="20"
              color="rgb(117, 117, 117)" />
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import json from "../../data/services.json";

export default defineComponent({
  name: "HomeServices",
  components: {
    Icon,
  },
  data() {
    return {
      services: json.services,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/components/_home-services";
</style>