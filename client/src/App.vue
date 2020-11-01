<template>
  <main>
    <country-list :countries="countryInfo"></country-list>
    <country-detail :country="selectedCountry" :borderingCountries="borderingCountries"></country-detail>
  </main>
</template>

<script>
import { eventBus } from "./main.js";
import Promises from "./components/Promises";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

export default {
  name: "app",
  data() {
    return {
      countryInfo: [],
      selectedCountry: null,
      borderingCountries: []
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
    'country-list': CountryList,
    'country-detail': CountryDetail
  }
};
</script>

<style>
</style>