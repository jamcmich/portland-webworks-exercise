<template>
  <section id="services">
    <div class="container">
      <h3 class="__header-style-3">Popular Services and Links</h3>

      <div class="column">
        <div class="item" v-for="service in services" :key="service.id">
          <div class="flex-reset">
            <a class="__link-style-1" :href="service.link">
              <span>{{ service.title }}</span>
              <Icon v-if="!service.link.includes('https://rfa.sc.gov/')"
                    icon="mdi:open-in-new"
                    color="rgb(117, 117, 117)" />
              <Icon v-if="service.link.includes('.pdf')"
                    icon="mdi:file-document-outline"
                    color="rgb(117, 117, 117)" />
            </a>
          </div>
        </div>
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