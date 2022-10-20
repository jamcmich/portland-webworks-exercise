<template>
  <div class="menu" v-on:click="emitShowMenu">
    <Icon v-if="!showMenu" icon="mdi:menu" width="48" color="white" />
    <Icon v-if="showMenu" icon="mdi:close" width="48" color="white" />
    <span v-if="!showMenu" class="__text">MENU</span>
    <span v-if="showMenu" class="__text">CLOSE</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AppNavbarMenu",
  components: {
    Icon,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    emitShowMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("handleShowMenu", this.showMenu);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/components/_app-navbar-menu";
</style>