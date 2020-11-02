<template>

<div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search Countries.."/>
		<country-list :countries="filteredList"></country-list>
		<country-detail :country="country"></country-detail>
  </div>
</div>
</template>

<script>
import { eventBus} from '@/main.js';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

export default {
	name: 'country-search',
	props: ['countries', 'country'],
	data() {
		return {
			search: ''
		};
	},
	components : {
		'country-detail' : CountryDetail,
		'country-list' : CountryList,
	},	


	computed : {
		filteredList() {
			return this.countries.filter((country) => {
				return country.name
				  .toLowerCase()
				  .includes(this.search.toLowerCase());
			})
		}
	}

};
</script>

<style scoped>

.search-wrapper {
	display: block;
	justify-content: center;
}
.search-wrapper input {
	font-family: inherit;
	width: 400px;
	background-color: lightgoldenrodyellow;
	max-width: 400px;
	border: solid 4px darkgreen;
	border-radius: 10px;
	font-size: 1.2rem;
	padding: 7px;
	margin:10px;
}
</style>
​