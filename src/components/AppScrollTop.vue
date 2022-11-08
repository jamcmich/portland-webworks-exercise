<template>
  <div class="scroll-top">
    <a v-on:click="handleReturnTop">
      <span>Back to Top</span>
      <span class="scroll-top__icon-background">
          <Icon icon="mdi:chevron-up" />
        </span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AppScrollTop",
  components: {
    Icon,
  },
  methods: {
    handleReturnTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_app-scroll-top.scss";
</style>