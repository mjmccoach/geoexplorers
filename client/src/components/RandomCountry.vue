<template>
<div id="app">
  <div class="random-country-wrapper">
    <button v-on:click="picker()">Random Capital:</button>
    <span
    class="random-country-text"
    v-if="randomCountry">
      The Capital city of <strong>{{randomCountry.name}} </strong> is <strong>{{randomCountry.capital}}</strong>!
      <!-- <img id="random-country-flag" :src="randomCountry.flag"/> -->

    </span>
  </div>
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
  font-family: 'Varela Round';
  font-size: 15px;
  color: #000;
}

#app {
  display: flex;
	flex-wrap: wrap;
  justify-content:center;
  padding-top: 10px;
  position: relative;
}

random-country-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 680px;
}

button {
  align-self: flex-start;
  color:black;
  margin-right: 3px;
  background: rgb(112, 206, 112);
  font-family: 'Varela Round';
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
  padding: 10px 10px;
  border-radius: 21px;
  transition:0.9s ease-in-out;

  border: 4px solid black;
  height: 50px;
  width: 250px;
  box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}

button:hover {
    background: radial-gradient(rgba(255, 166, 0, 0.200), rgba(255, 255, 0, 0.800));
    box-shadow: 0 13px 21px rgba(0,0,0,0.55), 0 8px 8px rgba(0,0,0,0.55);
}

.random-country-text {
  font-family: 'Varela Round';
  font-size: 20px;
  align-self: center;
  color:black;
  height: 50px;
  width: 550px;
}

#random-country-flag {
  align-self: flex-end;
  height: 80px;
  /* width: 100px; */
  box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}
/* button {
  border: none;
  background: #1b7e28;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
} */



</style>