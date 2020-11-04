<template lang="html">
  <main v-if="appDataReady">
    <header>
      <div class="intro-title-container">
        <div class="dummy-div"></div>
        <h1 class="intro-title">Welcome <span id="geoexplorer-text">GeoExplorers!</span></h1>
        <img class ="globe bounce-7"src="../src/assets/earth.svg" alt="globe" width=100px>
      </div>
      <random-country :countryInfo="countryInfo"></random-country>
    </header>

    <article class="page-intro">
      <div>
        <p class="intro-text">Are you ready to <strong>explore</strong>? Click and zoom on the map below or use the search fields to find a country 🔎</p>
      </div>
    </article>

    <section class="main-container">
      
      <country-search
      :countries="countryInfo" 
      :country="selectedCountry" 
      :borderingCountries="borderingCountries"
      >
      </country-search>

    </section>

    <footer >
      <h1 class="copyright">Brought to you by &#169 <span class="logo">MAAAD EDUCATION</span></h1>
    </footer>

  </main>
</template>

<script>
import { eventBus } from "./main.js";
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
          this.borderingCountries = this.findBorderingCountries();

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
@import url("https://fonts.googleapis.com/css2?family=Lemon&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom:0;
  background-color: none;
  background: none;
  align-items: center;
  padding: 80px 25px 25px 25px;
  margin: 0;
}

header h1 {
  color:white;
  font-size: 50px;
  font-family: lemon;
}

.dummy-div {
  width: 300px;
}

.page-intro {
  background-color: teal;
  /* padding-top: 120px; */
  width: 70vw;
  margin: auto;
  border: 4px solid black;
  border-radius: 8px;
}

.intro-title-container {
  display: flex;
  flex-direction: row nowrap;
  justify-content: center;
}

.intro-text {
  color: white;
  font-family: 'Varela Round';
  font-size: 30px;
  text-align: center;
  padding: 0 20px 0 20px;
}

#geoexplorer-text {
  font-family: lemon;
  color: white;
}

.globe {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  height: 140px;
  transform-origin: top;
  width: 140px;
}

.bounce-7 {
  animation-name: bounce-7;
  animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
}

@keyframes bounce-7 {
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-100px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
}

.main-container {
  font-family: 'Varela Round';
  padding: 10px;
  max-width: 90%;
  margin: auto;
}

footer {
  text-align: center;
  font-size: 40px;
}

.copyright{
  color:white;
  font-size: 16px;
  font-family: 'Varela Round';
}

.logo {
  font-size: 24px;
  font-family: itim;
}

/* main > header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 20vh;
} */
  /* flex-direction: column; */
  /* word-spacing: normal;

/* main > header > nav > ul > li {
  list-style: none;
  display: flex;
  flex-direction: row; */
  /* justify-content: end;
  margin: 0; */
/* } */
/* main >header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  word-spacing: normal;
} */
/* .stage { */
        /* border-bottom: 3px solid rgb(21, 143, 51); */
        /* display: flex; */
/* } */
/* .navbar{
  color:white;
  font-size: 20px;
  font-family: itim;
  list-style: none;


} */
/* .globeimage {
  height: 55px; 
  width: 55px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
} */
</style>