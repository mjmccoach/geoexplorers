<template>
  <main>
    <country-search :countries="countryInfo" :country="selectedCountry"></country-search>
    
  </main>
</template>

<script>
import { eventBus } from "./main.js";
import Promises from "./components/Promises";
import CountrySearch from "./components/CountrySearch";

export default {
  name: "app",
  data() {
    return {
      countryInfo: [],
      selectedCountry: null,
    };
  },
  mounted() {
    this.fetchCountryInfo();

    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country;
    });
  },
  methods: {
    fetchCountryInfo: function () {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => (this.countryInfo = data));
    },
  },
  components: {
    
    'country-search': CountrySearch
  }
};
</script>

<style>
</style>