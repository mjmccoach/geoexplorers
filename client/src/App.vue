<template>
  <main>
    <country-search
    :countries="countryInfo" 
    :country="selectedCountry" 
    :borderingCountries="borderingCountries" 
    :regions="regions" 
    :subRegions="subRegions" 
    :blocs="blocs" 
    :languages="languages">
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
      regions: [],
      subRegions: [],
      blocs: [],
      languages: [],
    };
  },
  mounted() {
    this.fetchCountryInfo();

    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country;
    });
    eventBus.$on('country-selected', (country) => {
      this.borderingCountries = this.findBorderingCountries();
    });
  },
  methods: {
    fetchCountryInfo: function () {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => (this.countryInfo = data));
    },
    findBorderingCountries: function () {
      return this.countryInfo.filter((country) => {
        return this.selectedCountry.borders.includes(country.alpha3Code)
    })
    }
  },
  components: {
    
    'country-search': CountrySearch,
    'country-detail': CountryDetail
  }
};
</script>

<style>
</style>