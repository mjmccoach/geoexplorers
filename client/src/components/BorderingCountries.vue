<template>
  <ul>
    <bordering-country-item
      v-for="(country, index) in countryList"
      :borderingCountries="borderingCountries"
      key="index"
    >
    </bordering-country-item>
  </ul>
</template>

<script>
import { eventBus } from "@/main.js";
import CountryList from "./CountryList";

export default {
  name: "bordering-countries",
  props: ["countryList", "borderingCountries"],
  components: {
    "country-list": CountryList,
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.testing {
  color: red;
}
</style>