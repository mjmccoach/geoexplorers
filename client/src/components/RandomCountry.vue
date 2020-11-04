<template>
<div id="app">
  <button v-on:click="picker()">Random Country!</button>
   <p v-if="randomCountry">The Capital of <strong>{{randomCountry.name}} </strong> is <strong>{{randomCountry.capital}}</strong>! 
     <span><img id="country-flag" :src="randomCountry.flag" width="40"/></span>
      </p>
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

<style scoped >
body {
  width: 100%;
  min-height: 100vh;

  font-family: itim;
  font-size: 15px;
  color: #000;
}
#app {
  /* min-width: 200px;
  height: 100px;
  border-radius: 10px;*/
  /* box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5); */

}
p {
  font-size: 20px;
  color:black;
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

button {
  color:black;
  margin-right: 3px;
  background-color:teal;
  font-family: itim;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
  padding: 10px 10px;
  border-radius: 20px;
  border: 4px solid black;
  

}

</style>