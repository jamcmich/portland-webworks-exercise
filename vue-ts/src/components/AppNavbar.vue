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
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/">Home</a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/about">About Us</a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/calendar">Events</a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/boards-committees">Boards & Committees</a>
          </li>
        </ul>

        <div class="search-container">
          <Icon icon="mdi:magnify" width="100%" />
        </div>
      </div>
    </div>

    <div class="bottom" :class="{ extended: showMenu }">
      <div class="left">
        <ul>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/">Home</a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/about">About Us</a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/calendar">Events</a>
          </li>
          <li>
            <a class="__link-style-2" href="https://rfa.sc.gov/boards-committees">Boards & Committees</a>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="column">
          <h2 class="__header-style-2">Data & Research</h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="">Education</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Healthcare</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Local Government</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Population & Demographics</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Presentations</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">State Finances and Economy</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Inflation Adjustments for Legal Proceedings</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h2 class="__header-style-2">Geography & Mapping</h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="">Analytic Mapping Services</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">County Boundary Program</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Jurisdictional Mapping</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">NC/SC Boundary</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">SC Real Time Network (RTN)</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Statewide Aerial Imagery</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Transportation Network Carrier Maps</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">LocateMe</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h2 class="__header-style-2">Programs & Services</h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="">Data Services & Online Solutions</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Fiscal Analysis</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Geodetic Survey</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Precint Demographics & Redistricting</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">State 9-1-1 Program</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h2 class="__header-style-2">Legislative Fiscal Impacts</h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="">Current General Assembly Session</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Previous General Assembly Session</a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="">Forms</a>
            </li>
          </ul>
        </div>
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