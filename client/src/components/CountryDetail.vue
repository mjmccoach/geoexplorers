<template>
  <article v-if="country">
    <h1>{{ country.name }}</h1>
    <p>
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" width="250"/>
    </p>
    <p>
      {{ country.name }} is a country in the {{ country.subregion }} part of {{ country.region }}.
    <p>
      {{ country.name }} has a population of {{ country.population }} spread over a surface area of {{ country.area }} square miles.
    </p>
    <p>
      The capital of {{ country.name }} is {{ country.capital }}.
    </p>
    <p>
      Learn about the neighbours of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
  </article>
</template>

<script>
import { eventBus } from "@/main.js";
import BorderingCountriesList from "./BorderingCountriesList.vue"

export default {
  name: "country-detail",
  props: ["country", "borderingCountries"],
  components: {
    "bordering-countries-list": BorderingCountriesList
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.testing {
  color: red;
}

h1 {
  font-weight: bold;
  text-justify: auto;
}
</style>

//  