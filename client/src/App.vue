<template></template>

<script>
import { eventBus } from "./main.js";
import Promises from "./components/Promises";

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
  },
  methods: {
    fetchCountryInfo: function () {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => (this.countryInfo = data));
    },
  },
};
</script>

<style>
</style>