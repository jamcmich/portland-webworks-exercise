<template>
  <nav class="navbar">
    <div class="top" :class="{ shrink: scrollPosition > 0 }">
      <div class="left" v-on:click="showMenu = !showMenu">
        <Icon v-if="!showMenu" icon="mdi:menu" width="48" color="white" />
        <Icon v-if="showMenu" icon="mdi:close" width="48" color="white" />
        <span v-if="!showMenu" class="__text">MENU</span>
        <span v-if="showMenu" class="__text">CLOSE</span>
      </div>

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

        <div class="search-container" v-on:click="showForm = !showForm" :class="{ extended: showForm }">
          <Icon icon="mdi:magnify" width="100%" :color="!showForm ? 'rgb(0, 116, 193)' : 'white'" />

          <form v-if="showForm" id="search-form" action="">
            <input class="__text" placeholder="Search rfa.sc.gov" v-on:click.stop />
            <button class="__button __stroke" form="search-form" type="submit" value="submit">
              Search
            </button>
          </form>
        </div>
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
          <h2 class="__header-style-2">
            <a href="https://rfa.sc.gov/data-research">
              Data & Research
            </a>
          </h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/data-research/education">
                Education
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/data-research/healthcare">
                Healthcare
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/data-research/local-government">
                Local Government</a>
            </li>
            <li>
              <a class="__link-style-2 __text"
                 href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center">
                Population & Demographics
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/data-research/presentations">
                Presentations
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/data-research/state-finances">
                State Finances and Economy
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text"
                 href="https://rfa.sc.gov/page/data-research/inflation-adjustments-legal-proceedings">
                Inflation Adjustments for Legal Proceedings
              </a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h2 class="__header-style-2">
            <a href="https://rfa.sc.gov/mapping">
              Geography & Mapping
            </a>
          </h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/data-services/mapping">
                Analytic Mapping Services
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/geodetic/county">
                County Boundary Program
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text"
                 href="https://rfa.sc.gov/programs-services/precinct-demographics/jurisdictional-mapping">
                Jurisdictional Mapping
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/geodetic/NC-SC-Boundary">
                NC/SC Boundary
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/geodetic/rtnstatus">
                SC Real Time Network (RTN)
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text"
                 href="https://rfa.sc.gov/programs-services/geodetic/statewide-aerial-imagery">
                Statewide Aerial Imagery
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/mapping/tcn">
                Transportation Network Carrier Maps
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/mapping/locate-me">
                LocateMe
              </a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h2 class="__header-style-2">
            <a href="https://rfa.sc.gov/programs-services">
              Programs & Services
            </a>
          </h2>

          <ul>
            <li>
              <a class="__link-style-2 __text"
                 href="https://rfa.sc.gov/programs-services/data-services-online-solutions">
                Data Services & Online Solutions
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/fiscal-analysis">
                Fiscal Analysis
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/geodetic">
                Geodetic Survey
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/precinct-demographics">
                Precinct Demographics & Redistricting
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/programs-services/state-9-1-1-program">
                State 9-1-1 Program
              </a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h2 class="__header-style-2">
            <a href="https://rfa.sc.gov/impacts">
              Legislative Fiscal Impacts
            </a>
          </h2>

          <ul>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/impacts">
                Current General Assembly Session
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/impacts">
                Previous General Assembly Session
              </a>
            </li>
            <li>
              <a class="__link-style-2 __text" href="https://rfa.sc.gov/impacts">
                Forms
              </a>
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
      showForm: false,
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

<style lang="scss" scoped>
@import "../styles/components/_app-navbar";
</style>