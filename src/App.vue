<template lang="pug">
  #app
    Header
    List
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
export default {
  name: "App",
  components: { Header, List },
  mounted() {
    document.body.classList.add('has-navbar-fixed-top')
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
