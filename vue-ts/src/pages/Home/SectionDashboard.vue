<template>
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
           href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data">
          Click here for population tables, downloadable files, and dashboards.</a>
      </p>

      <p class="__text">
        Read more about RFA Online Analytics
        <a class="__link-style-2"
           href="https://rfa.sc.gov/data-services/online-analytics">here</a>.
      </p>
    </div>
  </div>

  <div class="right-column">
    <div class="image-container">
      <a href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data/decennial-0">
        <button class="__button __solid">
          Click here to view census dashboards
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SectionDashboard",
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/home-dashboard";
</style>