<template>
  <nav id="navbar">
    <div class="top" :class="{ shrink: scrollPosition > 0 }">
      <AppNavbarButtonMenu v-on:handleShowMenu="getShowMenu" />

      <div class="right">
        <a class="site-details-container" href="https://rfa.sc.gov/">
          <img src="/assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

          <div class="site-details">
            <p class="__header-style-4">South Carolina<br>Revenue and Fiscal Affairs Office</p>
            <p class="__h3"><i>Transforming data into solutions for South Carolina</i></p>
          </div>
        </a>

        <ul>
          <li v-for="page in pages" :key="page.id">
            <a class="__link-style-2" :href="page.href">
              {{ page.title }}
            </a>
          </li>
        </ul>

        <AppNavbarButtonSearch />
      </div>
    </div>

    <div class="bottom" :class="{ extended: showMenu }">
      <div class="left">
        <ul>
          <li v-for="page in pages" :key="page.id">
            <a class="__link-style-2" :href="page.href">
              {{ page.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="column">
          <template v-for="link in links" :key="link.id">
            <AppNavbarListLinks :link="link" />
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import pagesData from "../data/pages.json";
import linksData from "../data/links.json";

import AppNavbarButtonMenu from "@/components/AppNavbarButtonMenu.vue";
import AppNavbarButtonSearch from "@/components/AppNavbarButtonSearch.vue";
import AppNavbarListLinks from "@/components/AppNavbarListLinks.vue";

export default defineComponent({
  name: "AppNavbar",
  components: {
    Icon,
    AppNavbarButtonMenu,
    AppNavbarButtonSearch,
    AppNavbarListLinks,
  },
  data() {
    return {
      pages: pagesData.pages,
      links: linksData.links,
      scrollPosition: 0,
      showMenu: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
    getShowMenu(value: boolean) {
      this.showMenu = value;
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
@import "@/styles/_app-navbar.scss";
</style>