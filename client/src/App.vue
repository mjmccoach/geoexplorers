<template lang="html">
  <main v-if="appDataReady">
    <div class="header-wrapper">
      <header>
        <!-- <section class = 'header'> -->
        <h1 class="title"><strong>Welcome GeoExplorers!</strong></h1>

        <div class="stage">
          <img class ="globe bounce-7"src="../src/assets/earth.svg" alt="globe" width=100px>
        </div>
        <!-- </section> -->

        <!-- <nav class="navbar">
          <ul>
            <li>About</li>
            <li>Quiz</li>
            
          </ul>
        </nav> -->
      </header>
    </div>
    
    <random-country :countryInfo="countryInfo"></random-country>

    <section class="main-container">
      
    
      <country-search
      :countries="countryInfo" 
      :country="selectedCountry" 
      :borderingCountries="borderingCountries"
      >
      </country-search>

    </section>

    <footer class = "footer">
      <h1 class="copyright">Brought to you by &#169 MAAAD EDUCATION</h1>
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


.main-container {
  font-family: 'Varela Round';
  display: flex;
  justify-content: center;
  padding: 10px;
  /* border: solid 4px black;
  border-radius: 8px; */
}

.header-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

header{
  display:flex;
  margin: 2px;
  flex-wrap: nowrap;
  justify-content: center;
  width: 64vw;
  margin-top: 80px;
  border-bottom:0;
  background-color: teal;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 25px;
  	border: 4px solid black;


}

.title {
  color:white;
  font-size: 58px;
  width: 44vw;
  font-family: lemon;
  margin-right: 0px;
  padding-right: 0px;
  -webkit-text-stroke: 0.4px;
  -webkit-text-stroke-color: rgba(170, 170, 170, 0.25);

}
.globeimage {
  height: 150px; 
  width:150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .navbar{
  color:white;
  font-size: 20px;
    font-family: 'Varela Round';
  list-style: none;


} */

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
.stage {
        /* border-bottom: 3px solid rgb(21, 143, 51); */
        display: flex;
}

.globe {
        /* align-self: flex-end; */
        animation-duration: 2s;
        animation-iteration-count: infinite;
        height: 140px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
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

    .copyright{
      color:rgba(0, 84, 42, 0.797);

      font-size: 20px;
    font-family: 'Varela Round';

    }
    main >footer {
      text-align: center;
      font-size: 40px;
    }

</style>