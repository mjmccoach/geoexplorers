<template lang="html">
  <span>
      <li v-on:click='selectCountry'>
        <img id="bordering-country-flag" :src="borderingCountry.flag" :alt="'Flag of ' + borderingCountry.name"/>
        {{ borderingCountry.name }} 
      </li>
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

#bordering-country-flag {
  border: 1px black solid;
  width: 30px;
}



</style>