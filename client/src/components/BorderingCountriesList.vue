<template lang="html">
  <ul id="bordering-countries-list">
    <bordering-countries-list-item
    v-for="(borderingCountry, index) in borderingCountries" :borderingCountry="borderingCountry" key="index">
    </bordering-countries-list-item>
  </ul>
</template>

<script>
import { eventBus } from "@/main.js";
import BorderingCountriesListItem from "./BorderingCountriesListItem.vue";

export default {
  name: "bordering-countries-list",
  props: ["borderingCountries"],
  components: {
    "bordering-countries-list-item": BorderingCountriesListItem
  },
  methods: {},
};
</script>

<style lang="css" scoped>

.testing {
  color: red;
}


</style>