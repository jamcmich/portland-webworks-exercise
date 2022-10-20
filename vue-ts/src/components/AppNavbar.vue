<template>
  <nav class="navbar">
    <div class="top" :class="{ shrink: scrollPosition > 0 }">
      <div class="left" v-on:click="showMenu = !showMenu">
        <Icon v-if="!showMenu" icon="mdi:menu" width="48" />
        <Icon v-if="showMenu" icon="mdi:close" width="48" />
        <span v-if="!showMenu" class="__text">MENU</span>
        <span v-if="showMenu" class="__text">CLOSE</span>
      </div>

      <div class="right">
        <a class="site-details-container" href="/">
          <img src="/assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

          <div class="site-details">
            <p class="__header-style-4">South Carolina<br>Revenue and Fiscal Affairs Office</p>
            <p class="__h3"><i>Transforming data into solutions for South Carolina</i></p>
          </div>
        </a>

        <ul>
          <li><a class="__link-style-2" href="">Home</a></li>
          <li><a class="__link-style-2" href="">About Us</a></li>
          <li><a class="__link-style-2" href="">Events</a></li>
          <li><a class="__link-style-2" href="">Boards & Committees</a></li>
        </ul>

        <div class="search-container">
          <Icon icon="mdi:magnify" width="100%" />
        </div>
      </div>
    </div>

    <div class="bottom" :class="{ extended: showMenu }">
      <div class="menu-extended">

      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "Navbar",
  components: {
    Icon,
  },
  data() {
    return {
      scrollPosition: 0,
      showMenu: false,
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