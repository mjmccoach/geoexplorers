<template lang="html">
  <ul class="testing" id="bordering-countries">
    <bordering-country-item
    v-for="(borderingCountry, index) in borderingCountriesList" :borderingCountry="borderingCountry" key="index"
    v-for="(country, index) in countries" :countryAlpha3Code="country.alpha3Code" key="index"
    v-if="borderingCountry === countryAlpha3Code"
    >
    </bordering-country-item>
  </ul>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "bordering-countries",
  props: ["countries", "borderingCountriesList"],
  components: {},
  methods: {},
};
</script>

<style lang="css" scoped>

.testing {
  color: red;
}


</style>