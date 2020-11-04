<template>
  <div class="random-country-container">
    <div v-on:click="picker()" class="button">Random Capital!</div>
      <p v-if="randomCountry" class="capital-text">The capital city of <br><strong>{{randomCountry.name}}</strong> is <strong>{{randomCountry.capital}}</strong>!<br> 
        <img id="country-flag" :src="randomCountry.flag" height="25"/>
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

<style scoped>

.random-country-container {
  width: 200px;
  align-items: center;
}

.button {
  color:black;
  margin-right: 3px;
  background-color:teal;
  font-family: itim;
  cursor: pointer;
  font-size: 20px;
  /* box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5); */
  margin: auto;
  padding: auto;
  border-radius: 15px;
  border: 4px solid black;
  height: 30px;
}

.button:hover {
  background-color: yellow;
}

.capital-text {
  margin: 2px;
  padding: 2px;
  font-family: itim;
  background: white;
  border-radius: 15px;
  border: 4px solid black;
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

/* #app {
  min-width: 200px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
} */
</style>