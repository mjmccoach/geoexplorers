<template>
  <li class="border-box" v-if="country" v-on:click="handleClick">
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
.border-box{
  font-family: itim;
  font-size: 18px;
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  background: rgb(112, 206, 112);
  margin: 11px;
  padding: 4px;
  	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.border-box:hover {
  transition:0.9s;
  background-color: yellow;
}

.border-box img{
display:inline-block;
vertical-align: middle;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);


}

#country-flag {
  border: solid 0.5px black;
  margin-right: 10px;
  height: 20px;
  width: 30px;
  object-fit: cover;
}
/* li:hover, h1:hover, a:hover {
  background-color: yellow;

} */



.border-box:hover {
  background-color: yellow;
}
</style>