<template>
  <button class="search-button"
          :class="{ 'search-button--extended': showSearch }"
          v-on:click="showSearch = !showSearch">
    <Icon icon="mdi:magnify" />

    <FormSearch v-if="showSearch"
                v-bind:showIcon="false"
                v-on:click.stop=""
                customClass="search-form--extended" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import FormSearch from "@/components/FormSearch.vue";

export default defineComponent({
  name: "AppNavbarButtonSearch",
  components: {
    Icon,
    FormSearch,
  },
  data() {
    return {
      showSearch: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_app-navbar-button-search.scss";
</style>