<template>
  <div class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                policy decisions and administration of services</p>

    <form id="search-form" class="search-form">
      <label></label>
      <input class="__text" placeholder="Search rfa.sc.gov" />
      <button class="__button __solid" form="search-form" type="submit">Apply</button>
    </form>
  </div>

  <div class="cards">
    <div class="card" v-for="(card, index) in cardItems.hero" :key="index">
      <img :src="card.img" :alt="card.alt" />
      <p>{{ card.title }}</p>
    </div>
  </div>
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