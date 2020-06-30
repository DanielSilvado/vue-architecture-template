<template>
  <v-content>
    <Header />
  </v-content>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },

  data: () => ({
    //state
  })
};
</script>

<style>
@import "./styles/Base.scss";
@import "./styles/Reset.scss";

@media screen and (max-width: 1024px) {
  body {
    background: red;
  }
}

@media screen and (max-width: 812px) {
  body {
    background: red;
  }
}
</style>
