<template>	
  <div class="search-wrapper" id="app" v-if="dataReady">
		<div class="search-box-alpha-container">
			<input type="text" v-model="search" v-on:keyup="resetSelectedCountry" placeholder="Search or select first letter..." />
			<ul id="alphabet-list">
				<first-letter-search v-for="(letter, index) in alphabet" :letter="letter" :countries="countries" :key="index"></first-letter-search>
			</ul>
		</div>
		<!-- <ul id="alphabet-list">
			<h2>Countries starting with:</h2>
			<first-letter-search v-for="(letter, index) in alphabet" :letter="letter" :countries="countries" :key="index"></first-letter-search>
				<first-letter-results-list :countries="countries" :selectedFirstLetter="selectedFirstLetter"></first-letter-results-list>

				<span>Countries By Continent:</span>
				<region-search v-for="(region, index) in regions" :region="region" :key="index"></region-search>
				<region-results-list :countries="countries" :selectedRegion="selectedRegion"></region-results-list>
		
				<span>Countries By Region:</span>
				<sub-region-search v-for="(subRegion, index) in subRegions" :subRegion="subRegion" :key="index"></sub-region-search>
				<sub-region-results-list :countries="countries" :selectedSubRegion="selectedSubRegion"></sub-region-results-list>

				<span>Countries By Political/Economic Bloc:</span>
				<bloc-search v-for="(bloc, index) in blocs" :bloc="bloc" :key="index"></bloc-search>
				<bloc-results-list :countries="countries" :selectedBloc="selectedBloc"></bloc-results-list>

				<span>Countries By Language Spoken:</span>
				<language-search v-for="(language, index) in languages" :language="language" :key="'language' + index"></language-search>
				<language-results-list :countries="countries" :selectedLangauge="selectedLanguage"></language-results-list>
			</ul> -->
    
		<country-list :countries="filteredList" ></country-list>
		<svg-map :countries="countries"></svg-map>
		<country-detail :country="country" :borderingCountries="borderingCountries"></country-detail>
		<quiz></quiz>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import FirstLetterSearch from './FirstLetterSearch';
// import FirstLetterResultsList from './FirstLetterResultsList';
import RegionSearch from './RegionSearch';
import RegionResultsList from './RegionResultsList';
import SubRegionSearch from './SubRegionSearch';
import SubRegionResultsList from './SubRegionResultsList';
import BlocSearch from './BlocSearch';
import BlocResultsList from './BlocResultsList';
import LanguageSearch from './LanguageSearch';
import LanguageSearchResultsList from './LanguageResultsList';
import SvgMap from "./SvgMap";
import Quiz from "./Quiz";

export default {
	name: 'country-search',
	props: ['countries', 'country', 'borderingCountries'],
	data() {
		return {
			dataReady: false,
			bananaData: "",
			search: '',
			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
			selectedFirstLetter: null,
			regions: ["", "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"],
			selectedRegion: "",
			subRegions: ["", "Australia and New Zealand", "Caribbean", "Central America", "Central Asia", "Eastern Africa", "Eastern Asia", "Eastern Europe", "Melanesia", "Micronesia", "Middle Africa", "Northern Africa", "Northern America", "Northern Europe", "Polynesia", "South America", "South-Eastern Asia", "Southern Africa", "Southern Asia", "Southern Europe", "Western Africa", "Western Asia", "Western Europe"],
			selectedSubRegion: "",
			blocs: ["South Asian Association for Regional Cooperation", "European Union", "Central European Free Trade Agreement", "African Union", "Caribbean Community", "Union of South American Nations", "Eurasian Economic Union", "Arab League", "Association of Southeast Asian Nations", "North American Free Trade Agreement", "Pacific Alliance", "Central American Integration System", "European Free Trade Association"],
			selectedBloc: "",
			languages: ["Pashto", "Swedish", "Albanian", "Arabic", "English", "Catalan", "Portuguese", "Spanish", "Armenian", "Dutch", "German", "Azerbaijani", "Bengali", "Belarusian", "French", "Dzongkha", "Bosnian", "Norwegian", "Malay", "Bulgarian", "Khmer", "Chinese", "Croatian", "Greek (modern)", "Czech", "Danish", "Tigrinya", "Estonian", "Amharic", "Faroese", "Finnish", "Georgian", "Kalaallisut", "Latin", "Hungarian", "Icelandic", "Hindi", "Indonesian", "Persian (Farsi)", "Irish", "Hebrew (modern)", "Italian", "Japanese", "Kazakh", "Kyrgyz", "Lao", "Latvian", "Lithuanian", "Macedonian", "Malaysian", "Divehi", "Maltese", "Romanian", "Mongolian", "Serbian", "Burmese", "Nepali", "Korean", "Polish", "Russian", "Kinyarwanda", "Samoan", "Slovak", "Slovene", "Somali", "Afrikaans", "Sinhalese", "Tajik", "Swahili", "Thai", "Turkish", "Turkmen", "Ukrainian", "Uzbek", "Bislama", "Vietnamese"],
			selectedLanguage: "",
		};
	},
	components : {
		'country-detail' : CountryDetail,
		'country-list' : CountryList,
		'first-letter-search': FirstLetterSearch,
		// 'first-letter-results-list': FirstLetterResultsList,
		'region-search': RegionSearch,
		'region-results-list': RegionResultsList,
		'sub-region-search': SubRegionSearch,
		'sub-region-results-list': SubRegionResultsList,
		'bloc-search': BlocSearch,
		'bloc-results-list': BlocResultsList,
		'language-search': LanguageSearch,
		'language-results-list': LanguageSearchResultsList,
		'svg-map': SvgMap,
		'quiz' : Quiz,
	},	

	computed: {
		filteredList() {
			if(!this.selectedFirstLetter) {
				return this.countries.filter((country) => {
					return country.name
				  	.toLowerCase()
				  	.includes(this.search.toLowerCase());
				});
			} else {
				return this.countries.filter((country) => {
				return country.name.startsWith(this.selectedFirstLetter);
				});
			};
		}
	},
	async mounted() {
		// These method calls are greyed out to have arrays be reliably populated until styling is complete.
		// await this.getAllRegions();
		// await this.getAllSubRegions();
		// await this.getAllBlocs();
		// await this.getAllLanguages();

		this.bananaCheck();
		this.dataReady = true;

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
		eventBus.$on('language-selected', (language) => {
    		this.selectedLanguage = language;
	});
	},

	methods: {
		resetSelectedCountry: function() {
			this.selectedFirstLetter = null;
		},

		getAllRegions: function () {
			let regionArray = [...new Set(this.countries.map(element => element.region))];
			regionArray.sort();
			this.regions = regionArray;
			console.log(this.regions);
		},

		getAllSubRegions: function () {
			let subRegionArray = [...new Set(this.countries.map(element => element.subregion))];
			subRegionArray.sort();
			this.subRegions = subRegionArray;
			console.log(this.subRegions);
		},

		getAllBlocs: function () {
			let objblocArray = [];

			for (let i=0; i<this.countries.length; i++) {
				const country = this.countries[i]
				if (country.regionalBlocs.length !== 0) {
					// console.log(`The country is ${country.name} and the regional bloc length is ${country.regionalBlocs.length}.`)
					objblocArray.push(this.countries[i].regionalBlocs[0].name);
				}
			}
			let distinctBlocArray = [...new Set(objblocArray)];
			console.log(distinctBlocArray)
			this.blocs = distinctBlocArray
		},

		getAllLanguages: function () {
			let objlangArray = [];

			for (let i=0; i<this.countries.length; i++) {
				const country = this.countries[i]
				if (country.languages.length !== 0) {
					// console.log(`The country is ${country.name} and the language bloc length is ${country.languages.length}.`)
					objlangArray.push(this.countries[i].languages[0].name)
				}
			}
			let distinctLangArray = [...new Set(objlangArray)];
			console.log(distinctLangArray);
			this.languages = distinctLangArray;
		},

		bananaCheck: function() {
			this.bananaData = "Banana";
		}
	}
}

</script>

<style scoped>

.testing {
	color: red;
}


.search-wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content:center;
	
}
#alphabet-list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 130px;
	margin: auto;
	margin-block-start: 0;
	margin-block-end: 0;
	padding-inline-start: 0;
	list-style: none;
	text-align: center;
	padding: 0px;
	border-radius: 8px;
	
}

.search-wrapper input {
    font-family: 'Varela Round';
	width: 400px;
	background: rgb(112, 206, 112);
	max-width: 400px;
	border-radius: 10px;
	border-radius: 1.5px;
	font-size: 1.2rem;
	padding: 6px;
	margin:10px;
	color: black;
	border: 4px solid black;
	border-radius: 8px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.search-wrapper input:hover {
  transition:0.9s ease-in-out;
	background-color: rgba(255, 255, 0, 0.667);
}

.search-wrapper input::-moz-selection {
  transition:0.9s ease-in-out;
	background-color: rgba(255, 255, 0, 0.667);
}

.search-box-alpha-container {
	width: max-content;
	justify-content: center;
	margin: 0 10px 20px 0;
	padding: 0px;
	border: 4px solid black;
	background: teal;
	border-radius: 8px;
	height: 200px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

}
</style>
​