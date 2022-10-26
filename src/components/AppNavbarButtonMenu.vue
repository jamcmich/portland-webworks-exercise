<template>
  <button id="menu" class="__button __solid" v-on:click="emitShowMenu">
    <template v-if="!showMenu">
      <Icon icon="mdi:menu" width="48" color="white" />
      <span class="__text">MENU</span>
    </template>

    <template v-else>
      <Icon icon="mdi:close" width="48" color="white" />
      <span class="__text">CLOSE</span>
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