<template>
  <section class="dashboard dashboard--flex">
    <div class="dashboard__container dashboard__container--flex">
      <div class="dashboard__column dashboard__column--flex">
        <h1 class="dashboard__header">RFA Analytics - Public Dashboard</h1>

        <div class="dashboard__text-container dashboard__text-container--flex">
          <p class="dashboard__text">
            The S.C. Revenue and Fiscal Affairs Office offers online solutions for accessing publicly sourced data. This
            is accomplished through the use of a business intelligence dashboard tool and ArcGIS Server.
          </p>

          <p class="dashboard__text">
            Our latest dashboards include population counts from the 2020 Census used for the redistricting process.
            Please note that gender and age are not included in this release.
            <a href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data">
              Click here for population tables, downloadable files, and dashboards.</a>
          </p>

          <p class="dashboard__text">
            Read more about RFA Online Analytics
            <a href="https://rfa.sc.gov/data-services/online-analytics">here</a>.
          </p>
        </div>
      </div>

      <div class="dashboard__column dashboard__column--flex">
        <div class="dashboard__img-container dashboard__img-container--flex">
          <a class="dashboard__img-link"
             href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data/decennial-0">
            <button class="dashboard__button">
              <span>View census dashboards</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHomeSectionDashboard",
});
</script>

<style lang="scss" scoped>
@import "@/styles/_page-home-section-dashboard.scss";
</style>