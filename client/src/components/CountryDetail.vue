<template>
  <article v-if="country">
    
    // BASIC INFO
    <h1>{{ country.name }}</h1>
    <p>
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" width="250"/>
    </p>

    // INFO ABOUT NAME & REGION
    <p v-if="country.altspellings > 1">
      {{ country.name }}, also known as {{ country.altSpellings[1] }}, is a country in the {{ country.subregion }} part of {{ country.region }}.
    </p>

    <p v-if="country.altspellings < 1">
      {{ country.name }} is a country in the {{ country.subregion }} part of {{ country.region }}.
    </p>

    // INFO ABOUT POPULATION & AREA
    <p>
      {{ country.name }} has a population of {{ country.population }} people spread over a surface area of {{ country.area }} square miles.
    </p>

    // INFO ABOUT LANGUAGE, NATIONALITY & CURRENCY
    <p
    v-if="country.languages >= 1"
    >
      Most people in {{ country.name }} speak {{ country.languages[0].name }}, call themselves {{ country.demonym }} and use the {{ country.currencies[0].name }} as money.
    </p>

    // INFO ABOUT REGIONAL BLOCS
    <p v-if="country.regionalBlocs > 1">
      {{ country.name }} is part of the {{ country.regionalBlocs[0].name }}, also known as {{ country.regionalBlocs[0].otherNames[2] }}
    </p>

    // INFO ABOUT CAPITAL CITY
    <p>
      The capital of {{ country.name }} is {{ country.capital }}.
    </p>

    // INFO ABOUT BORDERING COUNTRIES
    <p v-if="country.borders.length > 1">
      Learn about one of the {{ country.borders.length }} neighbours of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    <p v-if="country.borders.length === 1">
      Learn about the only neighbour of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    <p v-if="country.borders.length < 1">
      {{ country.name }} does not have land borders with any other countries.
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