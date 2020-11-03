<template>

<div id="app">
  	<div class="search-wrapper">
		<ul id="alphabet-list">
			<span>Countries starting with:</span>
			<first-letter-search
			v-for="(letter, index) in alphabet" :letter="letter" :key="index">
			</first-letter-search>
			<first-letter-results-list
			:countries="countries" :selectedFirstLetter="selectedFirstLetter">
			</first-letter-results-list>

			<!-- <span>Countries By Continent:</span>
			<region-search
			v-for="(region, index) in regions" :region="region" :key="index">
			</region-search>
			<region-results-list
			:countries="countries" :selectedRegion="selectedRegion">
			</region-results-list>
	
			<span>Countries By Region:</span>
			<sub-region-search
			v-for="(subRegion, index) in subRegions" :subRegion="subRegion" :key="index">
			</sub-region-search>
			<sub-region-results-list
			:countries="countries" :selectedSubRegion="selectedSubRegion">
			</sub-region-results-list>

			<span>Countries By Political/Economic Bloc:</span>
			<bloc-search
			v-for="(bloc, index) in blocs" :bloc="bloc" :key="index">
			</bloc-search>
			<bloc-results-list
			:countries="countries" :selectedBloc="selectedBloc">
			</bloc-results-list> -->

			<!-- <span>Countries By Language Spoken:</span>
			<language-search
			v-for="(language, index) in languages" :language="language" :key="index">
			</language-search>
			<language-results-list
			:languages="languages" :selectedLangauge="selectedLanguage">
			</language-results-list> -->

		</ul>
    <input type="text" v-model="search" placeholder="Search Countries.."/>
		<country-list :countries="filteredList"></country-list>
		<svg-map :countries="countries"></svg-map>
		<country-detail :country="country"></country-detail>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js';

import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import FirstLetterSearch from './FirstLetterSearch';
import FirstLetterResultsList from './FirstLetterResultsList';
import RegionSearch from './RegionSearch';
import RegionResultsList from './RegionResultsList';
import SubRegionSearch from './SubRegionSearch';
import SubRegionResultsList from './SubRegionResultsList';
import BlocSearch from './BlocSearch';
import BlocResultsList from './BlocResultsList';
// import LanguageSearch from './LanguageSearch';
// import LanguageSearchResultsList from './LanguageResultsList';
import SvgMap from "./SvgMap";

export default {
	name: 'country-search',
	props: ['countries', 'country', 'borderingCountries'],
	data() {
		return {
			search: '',
			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
			selectedFirstLetter: "",
			regions: [],
			selectedRegion: "",
			subRegions: [],
			selectedSubRegion: "",
			blocs: [],
			selectedBloc: "",
			// languages: [],
			// selectedLanguage: "",
		};
	},
	components : {
		'country-detail' : CountryDetail,
		'country-list' : CountryList,
		'first-letter-search': FirstLetterSearch,
		'first-letter-results-list': FirstLetterResultsList,
		'region-search': RegionSearch,
		'region-results-list': RegionResultsList,
		'sub-region-search': SubRegionSearch,
		'sub-region-results-list': SubRegionResultsList,
		'bloc-search': BlocSearch,
		'bloc-results-list': BlocResultsList,
		// 'language-search': LanguageSearch,
		// 'language-results-list': LanguageSearchResultsList,
		'svg-map': SvgMap
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
		this.getAllRegions();
		this.getAllSubRegions();
		this.getAllBlocs();
		// this.getAllLanguages();

		eventBus.$on('first-letter-selected', (letter) => {
    		this.selectedFirstLetter = letter;
    });
		eventBus.$on('region-selected', (region) => {
    		this.selectedRegion = region;
    });
		eventBus.$on('sub-region-selected', (subRegion) => {
    		this.selectedSubRegion = subRegion;
    });
		eventBus.$on('bloc-selected', (bloc) => {
    		this.selectedBloc = bloc;
    });
	// 	eventBus.$on('language-selected', (language) => {
    // 		this.selectedLanguage = language;
	// });
	},

	methods: {
		getAllRegions: function () {
			let regionArray = [...new Set(this.countries.map(element => element.region))];
			regionArray.sort();
			this.regions = regionArray;
		// 	console.log(this.regions);
		},

		getAllSubRegions: function () {
			let subRegionArray = [...new Set(this.countries.map(element => element.subregion))];
			subRegionArray.sort();
			this.subRegions = subRegionArray;
			console.log(this.subRegions);
		},

		getAllBlocs: function () {
			let objblocArray = [...new Set(this.countries.map(object => object.regionalBlocs[0]))];
			let namedBlocs = [...new Set(objblocArray.map(object => object.name))];
			namedBlocs.sort();
			this.blocs = namedBlocs;
			console.log(namedBlocs);
		},

		// getAllLanguages: function () {
		// 	let languagesArray = [...new Set(this.countries.map(element => element.languages[0]))];
		// 	languagesArray.sort();
		// 	this.languages = languagesArray;
		//	console.log(languagesArray);
		// },
	}
}


</script>

<style scoped>

.testing {
	color: red;
}

#alphabet-list {
	display: flex;
	

	list-style: none;
	text-align: left;
}



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