<template>
  <div id="scroll-top">
    <a class="__link-style-2" v-on:click="handleReturnTop">
      Back to Top
      <span class="icon-background">
          <Icon icon="mdi:chevron-up" width="28" color="rgb(0, 116, 193)" />
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