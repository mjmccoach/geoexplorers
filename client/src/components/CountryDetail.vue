<template>
  <article v-if="country">
    <h1>{{ country.name }}</h1>
    <span>
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" />
    </span>
    <hr />
    <p>
      {{ country.name }} is a country in the {{ country.subregion }} part of
      {{ country.region }} with a population of {{ country.population }} spread
      over a surface area of {{ country.area }} square miles.
    </p>
    <p>
      The capital of {{ country.name }} is {{ country.capital }} and the country
      is part of the {{ country.regionalBlocs.name }}.
    </p>
    <p>
      {{ country.name }} is bordered by:
      <bordering-countries :borderingCountriesList="country.borders"></bordering-countries>
    </p>
  </article>
</template>

<script>
import { eventBus } from "@/main.js";
import BorderingCountries from "./BorderingCountries.vue"

export default {
  name: "country-detail",
  props: ["country"],
  components: {
    "bordering-countries": BorderingCountries
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