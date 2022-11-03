<template>
  <section class="services services--flex">
    <div class="services__column">
      <h1 class="services__header">Popular Services and Links</h1>

      <div class="services__items services__items--grid">
        <template v-for="service in services" :key="service.id">
          <a class="services__item" :href="service.link">
            <span>{{ service.title }}</span>
            <Icon v-if="!service.link.includes('https://rfa.sc.gov/')"
                  icon="mdi:open-in-new" />
            <Icon v-if="service.link.includes('.pdf')"
                  icon="mdi:file-document-outline" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import json from "../data/services.json";

export default defineComponent({
  name: "SectionServices",
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
@import "@/styles/_page-home-section-services.scss";
</style>