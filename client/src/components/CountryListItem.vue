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
  font-family: 'Varela Round';
  font-size: 18px;
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  background: rgb(112, 206, 112);
  margin: 11px;
  padding: 4px;
  transition:0.9s ease-in-out;

  box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}

.border-box:hover #country-flag{
  background-color: yellow;
  box-shadow: 0 13px 21px rgba(0,0,0,0.55), 0 8px 8px rgba(0,0,0,0.55);
}

.border-box img{
display:inline-block;
vertical-align: middle;
box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}

/* .border-box img:hover {
  transition:0.9s ease-in-out;
  background-color: yellow;
  box-shadow: 0 13px 21px rgba(0,0,0,0.55), 0 8px 8px rgba(0,0,0,0.55);
} */

#country-flag {
  border: solid 0.5px black;
  margin-right: 10px;
  height: 20px;
  width: 30px;
  object-fit: cover;
  transition:0.9s ease-in-out;

}
/* li:hover, h1:hover, a:hover {
  background-color: yellow;

} */



.border-box:hover {
  background-color: yellow;
}
</style>