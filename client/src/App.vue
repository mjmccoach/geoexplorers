<template lang="html">
  <main>
    <country-search
    :countries="countryInfo" 
    :country="selectedCountry" 
    :borderingCountries="borderingCountries"
    >
    </country-search>
    
  </main>
</template>

<script>
import { eventBus } from "./main.js";
import Promises from "./components/Promises";
import CountrySearch from "./components/CountrySearch";
import CountryDetail from "./components/CountryDetail";


export default {
  name: "app",
  data() {
    return {
      countryInfo: [],
      selectedCountry: null,
      borderingCountries: [],
    };
  },
  mounted() {
    this.fetchCountryInfo();

    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country;
      this.borderingCountries = this.findBorderingCountries();
    });
    eventBus.$on('map-click', (country) => {
      this.selectedCountry = country;
      this.borderingCountries = this.findBorderingCountries();
    });

  },
  methods: {
    fetchCountryInfo: function () {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => (this.countryInfo = data))
    },
    findBorderingCountries: function () {
      return this.countryInfo.filter((country) => {
        return this.selectedCountry.borders.includes(country.alpha3Code)
    })
    }
  },
  components: {
    'country-search': CountrySearch
  }
};
</script>

<style lang="css" scoped>
</style>