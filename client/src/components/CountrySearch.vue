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
	width: 80%;
	max-width: 400px;
	border: 0;
	border-bottom: 2px solid lightseagreen;
	outline: 0;
	font-size: 1.2rem;
	color: lightseagreen;
	padding: 7px 0;
	background: transparent;
	margin: 15px 0 30px 0;
}
</style>
​