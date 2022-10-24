<template>
  <div class="links-container">
    <div class="row">
      <h2 class="__header-style-2">
        <a :href="link?.heading?.url">
          {{ link?.heading?.title }}
        </a>
      </h2>

      <button v-on:click="handleClick(link?.id)">
        <Icon :icon="toggleClass ? 'mdi:chevron-up' : 'mdi:chevron-down'"
              color="white"
              width="32" />
      </button>
    </div>

    <ul :class="toggleClass ? 'extended' : ''">
      <li v-for="item in link?.items">
        <a class="__link-style-2 __text item" :href="item?.url">
          {{ item?.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "ListLinks",
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
@import "../../styles/components/app-navbar-link-items";
</style>