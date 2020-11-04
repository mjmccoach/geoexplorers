<template>
  <li class="border-box" v-if="country" v-on:click="handleClick">
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" width="40"/>
      {{ country.name }}
  </li>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "country-list-item",
  props: ["country"],
  methods: {
    handleClick: function (event) {
      eventBus.$emit("country-selected", this.country);
      eventBus.$emit("map-location-selected", this.country);
    },
  },
};
</script>

<style scoped>
.border-box{
  cursor: pointer;
  color: black;
  border: 2px solid black;
  background: rgb(112, 206, 112);
  margin-right:10px;
  margin-bottom:10px;
}
#country-flag {
  border: solid 1px black;
  margin-right: 10px;
}
/* li:hover, h1:hover, a:hover {
  background-color: yellow;

} */



.border-box:hover {
  background-color: yellow;
}
</style>