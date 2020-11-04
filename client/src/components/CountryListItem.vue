<template>
  <li class="border-box" v-if="country" v-on:click="handleClick" v-scroll-to="'#svg-map-box'">
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name">
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

.border-box {
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  background: rgb(112, 206, 112);
  margin: 11px;
  padding: 4px;
}

.border-box img{
display:inline-block;
vertical-align: middle;
}

#country-flag {
  border: solid 0.5px black;
  margin-right: 10px;
  height: 20px;
  width: 30px;
  object-fit: cover;
}

.border-box:hover {
  background-color: yellow;
}
</style>