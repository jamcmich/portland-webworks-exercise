<template>
  <nav class="navbar" :class="{shrink: scrollPosition > 0}">
    <div class="menu">
      <Menu />
      <span class="__text">MENU</span>
    </div>

    <div class="row">
      <div class="site-details-container">
        <img src="/assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

        <div class="site-details">
          <p class="__header-style-4">South Carolina<br>Revenue and Fiscal Affairs Office</p>
          <p class="__h3"><i>Transforming data into solutions for South Carolina</i></p>
        </div>
      </div>

      <div class="search-container">
        <Search />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Menu from "./icons/Menu.vue";
import Search from "./icons/Search.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    Menu,
    Search,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
</script>

<style lang="scss">
@import "../styles/components/_app-navbar";
</style>