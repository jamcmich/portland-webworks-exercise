<template>
  <AppNavbar />
  <Home />
  <AppFooter />
</template>

<script lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import Home from "./pages/HomePage.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    Home,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 16px;
}
</style>