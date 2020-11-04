<template>
<div id="app">
  <random-country-wrapper>
    <button v-on:click="picker()">Random Capital!</button>
    <span
    class="random-country-text"
    v-if="randomCountry">
      The Capital of <strong>{{randomCountry.name}} </strong> is <strong>{{randomCountry.capital}}</strong>! 
      <button>
        <img id="random-country-flag" :src="randomCountry.flag" height="50"/>
      </button>
    </span>
  </random-country-wrapper>
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
  display: flex;
	flex-wrap: wrap;
  justify-content:center;
  padding-top: 10px;
  position: relative;
}

random-country-wrapper {
  display: flex;
  width: 48vw;
  

}

button {
  color:black;
  margin-right: 3px;
  background-color:teal;
  font-family: itim;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 1px 5px rgba(68, 68, 68, 0.5);
  /* padding: 10px 10px; */
  border-radius: 20px;
  border: 4px solid black;
  height: 70px;
  width: 180px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

}

.random-country-text {
  font-family: itim;
  font-size: 20px;
  justify-content: center;
  color:black;
  height: 50px;
  width: 650px;
}

#random-country-flag {
  justify-content: right;
  height: 50px;
  width: 100px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

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