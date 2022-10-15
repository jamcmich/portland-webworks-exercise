<template>
  <nav class="navbar">
    <div class="menu">
      <Menu />
      <span>MENU</span>
    </div>

    <div class="row">
      <div class="site-details-group">
        <img src="../assets/scrfao-logo.png" alt="South Carolina Revenue and Fiscal Affairs Office" />

        <div class="site-details">
          <p>South Carolina<br>Revenue and Fiscal Affairs Office</p>
          <p>Transforming data into solutions for South Carolina</p>
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