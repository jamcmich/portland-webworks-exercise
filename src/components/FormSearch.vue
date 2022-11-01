<template>
  <form id="search" class="search search--flex" :class="customClass" action="">
    <input class="__text" placeholder="Search rfa.sc.gov" />
    <button class="search__button search__button--solid" form="search" type="submit" value="submit">
      <span>Search</span>
      <Icon icon="mdi:magnify" v-if="showIcon" />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "FormSearch",
  props: {
    showIcon: Boolean,
    customClass: String,
  },
  components: {
    Icon,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_form-search.scss";
</style>