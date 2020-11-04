<template lang="html">
  <span>
      <button v-on:click='selectCountry'>
        <img id="bordering-country-flag" :src="borderingCountry.flag" :alt="'Flag of ' + borderingCountry.name"/>
        {{ borderingCountry.name }} 
      </button>
  </span>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "bordering-countries-list-item",
  props: ["borderingCountry"],
  components: {},
  methods: {
    selectCountry() {
      eventBus.$emit('country-selected', this.borderingCountry)
    }
  },
};
</script>

<style scoped>

span{
  display: inline-block;
  justify-content: space-between;
  margin-right: 15px;
}

button:hover {
  background-color: yellow;
  transition:0.9s;
}

button {
  height: 40px;
  width: auto;
  font-family: itim;
  font-size: 18px;
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  background: rgb(112, 206, 112);
  margin: 11px;
  padding: 4px;
  	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}


#bordering-country-flag {
  border: 1px black solid;
  width: 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

}



</style>