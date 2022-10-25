<template>
  <form id="search-form" :class="customClass" action="">
    <input class="__text" placeholder="Search rfa.sc.gov" />
    <button class="__button __solid" :class="buttonClass" form="search-form" type="submit" value="submit">
      Search
      <Icon icon="mdi:magnify" width="24" v-if="showIcon" />
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
    buttonClass: String,
  },
  components: {
    Icon,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_form-search.scss";
</style>