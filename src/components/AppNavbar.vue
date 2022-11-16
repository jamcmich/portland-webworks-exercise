<template>
  <nav class="navbar">
    <div class="navbar__top" :class="{ 'navbar__top--shrink': scrollPosition > 0 }">
      <AppNavbarButtonMenu v-on:handleShowMenu="getShowMenu" />

      <div class="top__contents">
        <a class="top__details" href="https://jamcmich.github.io/portland-webworks-exercise/">
          <img src="/assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

          <div class="top__headings">
            <h1>South Carolina<br>Revenue and Fiscal Affairs Office</h1>
            <h2><i>Transforming data into solutions for South Carolina</i></h2>
          </div>
        </a>

        <ul class="top__links">
          <li v-for="page in pages" :key="page.id">
            <a :href="page.href">
              {{ page.title }}
            </a>
          </li>
        </ul>

        <AppNavbarButtonSearch />
      </div>
    </div>

    <div class="navbar__bottom" :class="{ 'navbar__bottom--extended': showMenu }">
      <div class="bottom__left">
        <ul>
          <li v-for="page in pages" :key="page.id">
            <a :href="page.href">
              {{ page.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="bottom__right">
        <div class="bottom__right-column">
          <AppNavbarListLinks v-for="link in links" :key="link.id" :link="link" />
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