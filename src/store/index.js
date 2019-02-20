import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		results: [],
		errors: []
	},
	getters: {
		results(state) {
			return state.results.sort((a, b) => b.RAW.USD.PRICE - a.RAW.USD.PRICE );
		}
	},
	mutations: {
		set(state, { type, items }) {
			state[type] = items
		}
	},
	actions: {
		api_query( { commit } ) {
			axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
			.then(response => {
				const results = response.data.Data

				commit('set', { type: 'results', items: results } )
			})
			.catch(e => {
				console.log("Error: " + e)
				this.errors.push(e)
			})
		}
	}
})

export default store