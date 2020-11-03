<template lang="html">
  <main>
    <header class="title">
      <strong>Welcome GeoExplorers!!</strong>
      <img class ="globeimage"src="../src/assets/earth.svg" alt="globe" width=100px>
    </header>
    <section>
      <random-country :countryInfo="countryInfo">
        </random-country>
        </section>
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
  /* justify-content:space-evenly; */
  padding: 10px;
  border: solid 4px black;
  border-radius: 8px;
}
.title {
  text-align: center;
  color:white;
  font-size: 70px;
  font-family: itim;

}
.globeimage {
  margin-left: 20px;
  height: 150px; 
  width:150px;
}
</style>