<template>
  <div class="navbar__list-links">
    <div class="list-links__header">
      <h2>
        <a :href="link?.heading?.url">{{ link?.heading?.title }}</a>
      </h2>

      <button v-on:click="handleClick(link?.id)" tabindex="-1">
        <Icon :icon="toggleClass ? 'mdi:chevron-up' : 'mdi:chevron-down'" tabindex="0" />
      </button>
    </div>

    <ul class="list-links__items" :class="toggleClass ? 'list-links__items--extended' : ''">
      <li v-for="item in link?.items">
        <a class="list-links__item" :href="item?.url">{{ item?.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AppNavbarListLinks",
  props: {
    link: Object,
  },
  components: {
    Icon,
  },
  data() {
    return {
      toggleClass: false,
    };
  },
  methods: {
    handleClick(id: number) {
      this.toggleClass = !this.toggleClass;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_app-navbar-list-links.scss";
</style>