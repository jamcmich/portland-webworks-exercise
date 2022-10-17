<template>
  <section class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                policy decisions and administration of services</p>

    <form id="search-form" class="search-form">
      <label></label>
      <input class="__text" placeholder="Search rfa.sc.gov" />
      <button class="__button __solid" form="search-form" type="submit">Apply</button>
    </form>
  </section>

  <section class="cards">
    <div class="card" v-for="(card, index) in cardItems.hero" :key="index">
      <img :src="card.img" :alt="card.alt" />
      <p>{{ card.title }}</p>
    </div>
  </section>

  <section class="public-dashboard">
    <div class="flex-container">
      <div class="left-column">
        <h2 class="__header-style-2">RFA Analytics - Public Dashboard</h2>

        <div class="text-container">
          <p class="__text">
            The S.C. Revenue and Fiscal Affairs Office offers online solutions for accessing publicly sourced data. This
            is accomplished through the use of a business intelligence dashboard tool and ArcGIS Server.
          </p>

          <p class="__text">
            Our latest dashboards include population counts from the 2020 Census used for the redistricting process.
            Please note that gender and age are not included in this release.
            <a class="__link-style-2"
               href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data"
               target="_blank">Click here for population tables, downloadable files, and dashboards.</a>
          </p>

          <p class="__text">
            Read more about RFA Online Analytics
            <a class="__link-style-2"
               href="https://rfa.sc.gov/data-services/online-analytics"
               target="_blank">here</a>.
          </p>
        </div>
      </div>

      <div class="right-column">
        <div class="image-container">
          <button class="__button __solid">Click here to view census dashboards</button>
        </div>
      </div>
    </div>
  </section>

  <section class="additional-links">
    <div class="flex-container">
      <h3 class="__header-style-3">Popular Services and Links</h3>
    </div>
  </section>
</template>

<script lang="ts">
import Research from "../assets/research.svg";
import Geography from "../assets/geography.svg";
import Programs from "../assets/programs.svg";
import Legislative from "../assets/legislative.svg";

export default {
  name: "Home",
  data() {
    return {
      cardItems: {
        hero: [
          {
            title: "Data & Research",
            img: Research,
            alt: "Data & Research",
          },
          {
            title: "Geography & Mapping",
            img: Geography,
            alt: "Geography & Mapping",
          },
          {
            title: "Programs & Services",
            img: Programs,
            alt: "Programs & Services",
          },
          {
            title: "Legislative Fiscal Impacts",
            img: Legislative,
            alt: "Legislative Fiscal Impacts",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "../styles/pages/_home.scss";
</style>