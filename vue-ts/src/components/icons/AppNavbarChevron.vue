<template>
  <button v-on:click="toggleIcon = !toggleIcon">
    <Icon :icon="!toggleIcon ? 'mdi:chevron-down' : 'mdi:chevron-up'"
          color="white"
          width="32" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AppNavbarChevron",
  components: {
    Icon,
  },
  data() {
    return {
      toggleIcon: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/components/icons/_app-navbar-chevron.scss";
</style>