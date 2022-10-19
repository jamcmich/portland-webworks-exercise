<template>
  <Navbar />
  <Home />
</template>

<script lang="ts">
import Navbar from "./components/AppNavbar.vue";
import Home from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
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