<template>
  <button id="menu" v-on:click="emitShowMenu">
    <template v-if="!showMenu">
      <Icon icon="mdi:menu" color="white" />
      <span class="__text">menu</span>
    </template>

    <template v-else>
      <Icon icon="mdi:close" color="white" />
      <span class="__text">close</span>
    </template>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AppNavbarButtonMenu",
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
@import "@/styles/_app-navbar-button-menu.scss";
</style>