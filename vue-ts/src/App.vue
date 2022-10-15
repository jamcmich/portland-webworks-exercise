<template>
  <Navbar />
  <Home />
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
  },
};
</script>

<style lang="scss" scoped>
/* 1. Use a more-intuitive box-sizing model. */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margins */
* {
  margin: 0;
}

/* 3. Allow percentage-based heights in the application */
html, body {
  height: 100%;
}

/* Typographic tweaks!
 * 4. Improve text rendering
 */
body {
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Remove built-in form typography styles */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Create a root stacking context */
#root {
  isolation: isolate;
}

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