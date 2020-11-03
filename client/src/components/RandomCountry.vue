<template>
<div id="app">
  <p v-if="randomCountry">The Capital of <strong>{{randomCountry.name}} </strong> is <strong>{{randomCountry.capital}}</strong>! 
      <!-- it's flag is <img src=""https://restcountries.eu/data/afg.svg"" alt="flag"></-->
      </p>
  <button v-on:click="picker()">Random Country!</button>
</div>
</template>

<script>
export default {
    name: "random-country",
    props: ['countryInfo'],

    data() {
        return {
            randomCountry: null,
        }
    },

    methods: {
    picker: function(){
      var chosenNumber = Math.floor(Math.random() * this.countryInfo.length);
      this.randomCountry = this.countryInfo[chosenNumber];
    },
    }
};

</script>

<style scoped>
body {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  font-family: 'Montserrat',sans-serif;
  font-weight: 500;
  color: #000;
}
#app {
  min-width: 200px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
}
p {
  font-size: 2em;
  text-align: center;
  color: #101110;
}
button {
  border: none;
  background: #1b7e28;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5em;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
}

</style>