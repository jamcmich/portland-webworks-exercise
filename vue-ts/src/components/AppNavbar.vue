<template>
  <!-- TODO: Add active menu and search icon logic -->
  <nav class="navbar">
    <div class="menu">
      <Menu />
      <span class="__text">MENU</span>
    </div>

    <div class="row">
      <div class="site-details-container">
        <img src="../assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

        <div class="site-details">
          <p class="__header-style-4">South Carolina<br>Revenue and Fiscal Affairs Office</p>
          <p class="__h3"><i>Transforming data into solutions for South Carolina</i></p>
        </div>
      </div>


      <div class="search-container">
        <Search />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Menu from "./icons/Menu.vue";
import Search from "./icons/Search.vue";

export default {
  name: "Navbar",
  components: {
    Menu,
    Search,
  },
};
</script>

<style lang="scss">
@import "../styles/components/_navbar";
</style>