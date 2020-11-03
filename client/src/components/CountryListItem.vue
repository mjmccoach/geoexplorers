<template>
  <li 
  v-if="country"
  v-on:click="handleClick">
    <span>{{ country.name }}</span>
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

/* li:hover, h1:hover, a:hover {
  background-color: yellow;

} */
</style>