<template lang="html">
  <article>
    <div>
      <li v-on:click='selectCountry'>
        {{ borderingCountry.name }}
      </li>
    </div>
  </article>
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

<style lang = "css" scoped>

.testing {
  color: red;
}

p {
  color: purple;
}

</style>