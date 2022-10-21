<template>
  <div class="search-container"
       :class="{ extended: showSearch }"
       v-on:click="showSearch = !showSearch">
    <Icon icon="mdi:magnify"
          width="32"
          :color="!showSearch ? 'rgb(0, 116, 193)' : 'white'" />

    <SearchForm v-if="showSearch"
                v-bind:showIcon="false"
                v-on:click.stop=""
                customClass="search-extended"
                buttonClass="__stroke" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import SearchForm from "./forms/SearchForm.vue";

export default defineComponent({
  name: "AppNavbarSearch",
  components: {
    Icon,
    SearchForm,
  },
  data() {
    return {
      showSearch: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/components/_app-navbar-search";
</style>