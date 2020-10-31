<template lang="html">
  <ul class="testing" id="bordering-countries">
    <bordering-country-item
    v-for="(borderingCountry, index) in borderingCountriesList" :borderingCountry="borderingCountry" key="index"
    v-if="(borderingCountry === country.alpha3Code) :country.name"
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