<template>
  <AppNavbar />
  <PageHome />
  <AppFooter />
</template>

<script lang="ts">
import AppNavbar from "./components/Navbar/AppNavbar.vue";
import PageHome from "./pages/Home/PageHome.vue";
import AppFooter from "./components/Footer/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    PageHome,
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