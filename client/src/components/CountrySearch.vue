<template></template>

<div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search Countries.."/>
</div>

<script>
import { eventBus} from '@/main.js;

export default {
    name: 'country-search'

};
</script>

<style>
</style>

