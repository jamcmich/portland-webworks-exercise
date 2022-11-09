<template>
  <form id="search-form" class="search-form" :class="customClass" action="">
    <input class="search-form__input" placeholder="Search rfa.sc.gov" />
    <button class="search-form__button search-form__button" form="search-form" type="submit" value="submit">
      <span class="search-form__span">Search</span>
      <Icon class="search-form__icon" icon="mdi:magnify" v-if="showIcon" />
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