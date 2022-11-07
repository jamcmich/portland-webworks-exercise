<template>
  <AppNavbar />
  <PageHome />
  <AppFooter />
</template>

<script lang="ts">
import AppNavbar from "@/components/AppNavbar.vue";
import PageHome from "@/components/PageHome.vue";
import AppFooter from "@/components/AppFooter.vue";

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
}
</style>