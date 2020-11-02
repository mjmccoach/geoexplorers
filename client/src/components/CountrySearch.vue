<template>

<div id="app">
  <div class="search-wrapper">
	<ul id="alphabet-list">
		<span>Countries starting with:</span>
		<first-letter-search
		v-for="(letter, index) in alphabet" :letter="letter" :key="letter.index">
		</first-letter-search>
		<first-letter-results-list
		:countries="countries" :selectedFirstLetter="selectedFirstLetter">
		</first-letter-results-list>
	</ul>
    <input type="text" v-model="search" placeholder="Search Countries.."/>
		<country-list :countries="filteredList"></country-list>
		<country-detail :country="country" :borderingCountries="borderingCountries"></country-detail>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js';

import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import FirstLetterSearch from './FirstLetterSearch';
import FirstLetterResultsList from './FirstLetterResultsList';

export default {
	name: 'country-search',
	props: ['borderingCountries', 'countries', 'country'],
	data() {
		return {
			search: '',
			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
			selectedFirstLetter: "",
		};
	},
	components : {
		'country-detail' : CountryDetail,
		'country-list' : CountryList,
		'first-letter-search': FirstLetterSearch,
		'first-letter-results-list': FirstLetterResultsList,
	},	


	computed : {
		filteredList() {
			return this.countries.filter((country) => {
				return country.name
				  .toLowerCase()
				  .includes(this.search.toLowerCase());
			})
		}
	},
	mounted() {
		eventBus.$on('first-letter-selected', (letter) => {
    		this.selectedFirstLetter = letter;
    });

	},

	methods: {
		
	},

};
</script>

<style scoped>

.testing {
	color: red;
}

#alphabet-list {
	list-style: none;
	text-align: left;
}

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