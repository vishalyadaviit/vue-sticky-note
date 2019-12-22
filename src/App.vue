<template>
  <div id="app">
    <VsnNavbar></VsnNavbar>
    <div class="container">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VsnNavbar from "@/components/vsnNavbar.vue";

export default {
  name: "app",
  components: {
    VsnNavbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
