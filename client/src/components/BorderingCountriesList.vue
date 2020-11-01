<template lang="html">
  <ul id="bordering-countries">
    <bordering-country-list-item
    v-for="(borderingCountry, index) in countriesBorderingSelectedCountry" :borderingCountry="borderingCountry" key="index"
    >
    </bordering-country-list-item>
  </ul>
</template>

<script>
import { eventBus } from "@/main.js";
import BorderingCountryListItem from "./BorderingCountryListItem";

export default {
  name: "bordering-countries-list",
  props: ["countriesBorderingSelectedCountry"],
  components: {
    "bordering-country-list-item": BorderingCountryListItem
  },
  methods: {},
};
</script>

<style lang="css" scoped>

.testing {
  color: red;
}


</style>