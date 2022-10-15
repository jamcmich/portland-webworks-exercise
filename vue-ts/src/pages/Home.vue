<template>
  <div class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and<br>resources to facilitate informed
                                policy<br>decisions and
                                administration of services</p>

    <form id="search-form" class="search-form">
      <label></label>
      <input class="__text" placeholder="Search rfa.sc.gov" />
      <button class="__button __solid" form="search-form" type="submit">Apply</button>
    </form>
  </div>
</template>

<script lang="ts">

export default {
  name: "Home",
};
</script>

<style lang="scss">
@import "../styles/pages/_home.scss";
</style>