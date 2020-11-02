<template>

<div id="app">
  <div class="search-wrapper">
	<ul class="alphabetical-selector">
		<li>
			<span v-on:click'handleLetterClick'>A </span>
			<span v-on:click'handleLetterClick'>B </span>
			<span v-on:click'handleLetterClick'>C </span>
			<span v-on:click'handleLetterClick'>D </span>
		</li>
		<li>
			<span v-on:click'handleLetterClick'>E </span>
			<span v-on:click'handleLetterClick'>F </span>
			<span v-on:click'handleLetterClick'>G </span>
			<span v-on:click'handleLetterClick'>H </span>
		</li>
		<li>
			<span v-on:click'handleLetterClick'>I </span>
			<span v-on:click'handleLetterClick'>J </span>
			<span v-on:click'handleLetterClick'>K </span>
			<span v-on:click'handleLetterClick'>L </span>
		</li>
		<li>
			<span v-on:click'handleLetterClick'>M </span>
			<span v-on:click'handleLetterClick'>N </span>
			<span v-on:click'handleLetterClick'>O </span>
			<span v-on:click'handleLetterClick'>P </span>
		</li>
		<li>
			<span v-on:click'handleLetterClick'>Q </span>
			<span v-on:click'handleLetterClick'>R </span>
			<span v-on:click'handleLetterClick'>S </span>
			<span v-on:click'handleLetterClick'>T </span>
		</li>
		<li>
			<span v-on:click'handleLetterClick'>U </span>
			<span v-on:click'handleLetterClick'>V </span>
			<span v-on:click'handleLetterClick'>W </span>
			<span v-on:click'handleLetterClick'>X </span>
		</li>
		<li>
			<span v-on:click'handleLetterClick'>Y </span>
			<span v-on:click'handleLetterClick'>Z </span>
		</li>
	</ul>
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
			search: '',
			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
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
	},
	methods: {}
	}

};
</script>

<style scoped>

.testing {
	color: red;
}

ul {
	list-style: none;
	text-align: center;
}

.alphabetical-selector {
	list-style-type: none;
	padding:0px;
	cursor: pointer;
	width: 20%;
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