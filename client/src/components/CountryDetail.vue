<template>
<section id="country-detail-container" v-if="country">
  <article id="country-detail">
    
    <!-- // BASIC INFO -->
    <h1>{{ country.name }}</h1>
    <p>
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" width="250"/>
    </p>

    <!-- // INFO ABOUT NAME & REGION -->
    <p v-if="country.altspellings > 1">
      {{ country.name }}, also known as {{ country.altSpellings[1] }}, is a country in the {{ country.subregion }} part of {{ country.region }}.
    </p>

    <p v-if="country.altspellings < 1">
      {{ country.name }} is a country in the {{ country.subregion }} part of {{ country.region }}.
    </p>

    <!-- // INFO ABOUT POPULATION & AREA -->
    <p>
      &#128200; {{ country.name }} has a population of {{ country.population.toLocaleString() }} people spread over a surface area of {{ country.area.toLocaleString() }} square miles.
    </p>

    <!-- // INFO ABOUT LANGUAGE, NATIONALITY & CURRENCY -->
    <p>
      <span v-if="country.languages.length > 0">
      &#128483; Most people in {{ country.name }} speak {{ country.languages[0].name }}
      </span>
      <span v-if="country.demonym !==  null">
      and call themselves {{ country.demonym }}. 
      </span>
      <p>
      <span v-if="country.currencies.length >0">
      &#128176;They use the {{ country.currencies[0].name }} ({{ country.currencies[0].symbol }}) as money .
      </span>
    </p>

    <!-- // INFO ABOUT REGIONAL BLOCS -->
    <p v-if="country.regionalBlocs.length > 0">
      &#127760; {{ country.name }} is part of the {{ country.regionalBlocs[0].name }}.
    </p>
        
    <!-- // INFO ABOUT CAPITAL CITY -->
    <p>
      &#127963; The capital of {{ country.name }} is {{ country.capital }}.
    <p>
      &#127926; Play National Anthem of {{ country.name }}.

    </p>
        <audio :key="this.audioUrl" id="player" preload="auto">
        <source :src="this.audioUrl" >
        </audio>
        <div>
        <button onclick="document.getElementById('player').play()">Play</button> 
        <button onclick="document.getElementById('player').load()">Stop</button>
        <button onclick="document.getElementById('player').volume += 0.1">Vol +</button> 
        <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button>
  </div>

    <!-- // INFO ABOUT BORDERING COUNTRIES -->
    <p v-if="country.borders.length > 1">
      &#128218; Learn more about one of the {{ country.borders.length }} neighbours of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    <p v-if="country.borders.length === 1">
      &#128218; Learn more about the only neighbour of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    <p v-if="country.borders.length < 1">
      {{ country.name }} does not have land borders with any other countries.
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    &#128187; <a :href="this.wikiUrl" target="_blank">Learn more about {{ country.name }} on Wikipedia</a>

    
  </article>
  </section>
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
  methods: {
  },

  computed: {
    audioUrl() {
      const lowerAlpha2Code = this.country.alpha2Code.toLowerCase()
      return `http://www.nationalanthems.info/${lowerAlpha2Code}.mp3`
    },
    wikiUrl() {
      const countryLink = this.country.name
      return `https://en.wikipedia.org/wiki/${countryLink}`
    }

  }
  
};
</script>

<style lang="css" scoped>
.testing {
  color: red;
}

#country-detail-container {
  width: 49%;
}

#country-detail {
  border: solid 4px black;
  background: #f8ca00;
  /* background: linear-gradient(180deg, rgba(255,215,6,1) 58%, rgba(252,176,69,1) 100%);   */
  border-radius: 10px;
  height: max-content;
  margin: 10px;
  padding: 5px;
  width: 700px;
}

#country-flag {
  width: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: solid 2px black;
  box-shadow: 5px 5px 15px 5px black;
  
  
}

h1 {
  font-weight: bold;
  text-emphasis: none;
  text-align: center;
  font-size: 25px;
  margin-top: 0px;
  margin-bottom: 10px;
  text-justify: auto;
}

button {
  color: yellow;
  margin-right: 3px;
  background-color: teal;
  font-family: itim;
  border: solid 3px black;
}
</style>