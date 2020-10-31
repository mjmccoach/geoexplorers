<template>
  <li v-on:click="handleClick">
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
    },
  },
};
</script>

<style>
li {
    cursor: pointer;
}

</style>