<template lang="html">
  <main v-if="appDataReady">
    <header>
      <random-country :countryInfo="countryInfo">
        </random-country>
        </header>
    <section class="main-container">
    
    <country-search
    :countries="countryInfo" 
    :country="selectedCountry" 
    :borderingCountries="borderingCountries"
    >
    </country-search>
    </section>
  </main>
</template>

<script>
import { eventBus } from "./main.js";
import Promises from "./components/Promises";
import CountrySearch from "./components/CountrySearch";
import RandomCountry from "./components/RandomCountry";
import CountryDetail from "./components/CountryDetail";


export default {
  name: "app",
  data() {
    return {
      appDataReady: false,
      appBanana: "",
      countryInfo: [],
      selectedCountry: null,
      borderingCountries: [],
    };
  },
  async mounted() {
    await this.fetchCountryInfo();
    this.fetchAppBanana();
    this.appDataReady = true;

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
        .then(()=>{
          var chosenNumber = Math.floor(Math.random() * this.countryInfo.length);
          this.selectedCountry = this.countryInfo[chosenNumber];
        })
    },
    findBorderingCountries: function () {
      return this.countryInfo.filter((country) => {
        return this.selectedCountry.borders.includes(country.alpha3Code)
    })
    },
    fetchAppBanana: function () {
      this.appBanana = "Banana"
    }
  },
  components: {
    
    'country-search': CountrySearch,
    'random-country':RandomCountry,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
.main-container {
  font-family: itim;
  display: flex;
  justify-content:space-evenly;
  padding: 10px;
  border: solid 4px black;
  border-radius: 8px;
}
</style>