<template>
  <li v-if="country" v-on:click="handleClick">
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

<style>
li {
  cursor: pointer;
}

#country-flag {
  border: solid 1px black
}
/* li:hover, h1:hover, a:hover {
  background-color: yellow;

} */
</style>