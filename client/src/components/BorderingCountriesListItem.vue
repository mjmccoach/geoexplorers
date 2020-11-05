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

button {
  height: 40px;
  width: auto;
  font-family: 'Varela Round';
  font-size: 18px;
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  background: rgb(112, 206, 112);
  margin: 11px;
  padding: 4px;
  transition:0.9s ease-in-out;

  border-radius: 8px;
  box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}

button:hover {
  background: radial-gradient(rgba(255, 166, 0, 0.200), rgba(255, 255, 0, 0.800));
  transition:0.9s ease-in-out;
  box-shadow: 0 13px 21px rgba(0,0,0,0.55), 0 8px 8px rgba(0,0,0,0.55);
}

#bordering-country-flag {
  border: 1px black solid;
  width: 30px;
  box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);

}



</style>