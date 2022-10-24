<template>
  <nav class="navbar">
    <div class="top" :class="{ shrink: scrollPosition > 0 }">
      <ButtonMenu v-on:handleShowMenu="getShowMenu" />

      <div class="right">
        <a class="site-details-container" href="https://jamcmich.github.io/portland-webworks-exercise/">
          <img src="/assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

          <div class="site-details">
            <p class="__header-style-4">South Carolina<br>Revenue and Fiscal Affairs Office</p>
            <p class="__h3"><i>Transforming data into solutions for South Carolina</i></p>
          </div>
        </a>

        <ul>
          <li>
            <a class="__link-style-2" href="https://jamcmich.github.io/portland-webworks-exercise/">
              Home
            </a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/about">
              About Us
            </a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/calendar">
              Events
            </a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/boards-committees">
              Boards & Committees
            </a>
          </li>
        </ul>

        <ButtonSearch />
      </div>
    </div>

    <div class="bottom" :class="{ extended: showMenu }">
      <div class="left">
        <ul>
          <li>
            <a class="__link-style-2" href="https://jamcmich.github.io/portland-webworks-exercise/">
              Home
            </a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/about">
              About Us
            </a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/calendar">
              Events
            </a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/boards-committees">
              Boards & Committees
            </a>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="column">
          <template v-for="link in links" :key="link.id">
            <ListLinks :link="link" />
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import json from "../../../data/links.json";

import ButtonMenu from "./ButtonMenu.vue";
import ButtonSearch from "./ButtonSearch.vue";
import ListLinks from "./ListLinks.vue";

export default defineComponent({
  name: "AppNavbar",
  components: {
    Icon,
    ButtonMenu,
    ButtonSearch,
    ListLinks,
  },
  data() {
    return {
      links: json.links,
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

<style lang="scss" scoped>
@import "../../styles/components/app-navbar";
</style>