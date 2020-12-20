<template>
  <div id="app">
    <VsnNavbar></VsnNavbar>
    <div class="container">
      <div class="col-12 my-3">
        <h2 class="mb-3">Vue-Material-Chips</h2>
        <img src="./assets/images/happyFace.jpg" alt />
        <img :src="imgUrlPath" alt />
      </div>
      <div class="col-12 pt-3">
        <VueMaterialChips :chip-data="['Apple', 'Microsoft', 'Google', 'IBM']" cssClass="blue-chip"></VueMaterialChips>
        <VueMaterialChips :chip-data="['Apple', 'Microsoft', 'Google', 'IBM']" cssClass="black-chip" chip-type="large"></VueMaterialChips>
      </div>
      <div class="col-12 pt-3">
        <VueMaterialChips :chip-data="myContacts" cssClass="black-chip" chip-type="large" :on-chip-remove="onCloseClick"></VueMaterialChips>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VsnNavbar from "@/components/vsnNavbar.vue";
import VueMaterialChips from "vue-material-chips";

export default {
  name: "app",
  components: {
    VsnNavbar,
    VueMaterialChips
  },
  data() {
    return {
      imgUrlPath: require("./assets/images/smiley.jpg"),
      myContacts: [
        {
          imgUrl: require("./assets/images/unicorn.jpg"),
          value: "Amarjeet Malik"
        },
        {
          imgUrl: require("./assets/images/happyFace.jpg"),
          value: "Aman Gupta"
        }
      ]
    };
  },
  methods: {
    onCloseClick(chipItem) {
      /*eslint-disable */

      console.log("onCloseClick CALLED");
      console.log(chipItem);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.black-chip {
  background-color: #343a40 !important;
  color: #ffffff !important;
}

.black-chip.mt-close:before {
  background-color: white;
}

.black-chip.mt-close:after {
  background-color: white;
}

.blue-chip {
  background-color: #007bff !important;
  color: #ffffff !important;

  .mt-close:before {
    background-color: white;
  }

  .mt-close:after {
    background-color: white;
  }
}
</style>
