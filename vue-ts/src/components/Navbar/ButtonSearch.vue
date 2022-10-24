<template>
  <div class="search-container"
       :class="{ extended: showSearch }"
       v-on:click="showSearch = !showSearch">
    <Icon icon="mdi:magnify"
          width="32"
          :color="!showSearch ? 'rgb(0, 116, 193)' : 'white'" />

    <FormSearch v-if="showSearch"
                v-bind:showIcon="false"
                v-on:click.stop=""
                customClass="search-extended"
                buttonClass="__stroke" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import FormSearch from "../Forms/FormSearch.vue";

export default defineComponent({
  name: "ButtonSearch",
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
@import "../../styles/components/app-navbar-search";
</style>