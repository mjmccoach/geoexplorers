<template>
<section id="country-detail">
  <article v-if="country">
    
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
      {{ country.name }} has a population of {{ country.population.toLocaleString() }} people spread over a surface area of {{ country.area.toLocaleString() }} square miles.
    </p>

    <!-- // INFO ABOUT LANGUAGE, NATIONALITY & CURRENCY -->
    <p>
      <span v-if="country.languages.length !== 0">
      Most people in {{ country.name }} speak {{ country.languages[0].name }}, 
      </span>
      <span v-if="country.demonym !==  null">
      call themselves {{ country.demonym }} 
      </span>
      <span v-if="country.currencies.length !== 0">
      and use the {{ country.currencies[0].name }} as money.
      </span>
    </p>

    <!-- // INFO ABOUT REGIONAL BLOCS -->
    <p v-if="country.regionalBlocs.length !== 0">
      {{ country.name }} is part of the {{ country.regionalBlocs[0].name }}.
    </p>

     <p>
       Play National Anthem of {{ country.name }}

       <p>
      <audio :key="this.audioUrl" id="player" preload="auto">
        <source :src="this.audioUrl" >
        </audio>
        <div>
        <button onclick="document.getElementById('player').play()">Play</button> 
        <button onclick="document.getElementById('player').load()">Stop</button>
        <button onclick="document.getElementById('player').volume += 0.1">Vol +</button> 
        <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button>
  </div>
        
    <!-- // INFO ABOUT CAPITAL CITY -->
    <p>
      The capital of {{ country.name }} is {{ country.capital }}.
    </p>

    <!-- // INFO ABOUT BORDERING COUNTRIES -->
    <p v-if="country.borders.length > 1">
      Learn about one of the {{ country.borders.length }} neighbours of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    <p v-if="country.borders.length === 1">
      Learn about the only neighbour of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
    <p v-if="country.borders.length < 1">
      {{ country.name }} does not have land borders with any other countries.
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
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
    }
  }
};
</script>

<style lang="css" scoped>
.testing {
  color: red;
}

#country-detail {
  border: solid 4px darkgreen;
  background-color: yellow;
  border-radius: 10px;
  height: 475px;
  margin: 10px;
  padding: 5px;
  width: 400px
}

#country-flag {
  width: 120px;
  margin-right: 10px;
  border: solid 2px black;
  box-shadow: 5px 5px 15px 5px gray;
  
  
}

h1 {
  font-weight: bold;
  text-justify: auto;
}

button {
  color: yellow;
  margin-right: 3px;
  background-color: darkblue;
  font-family: itim;
}
</style>

//  