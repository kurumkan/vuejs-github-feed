import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {		
		githubEvents: [],	
		user:null,
		error: null,
		page: 1
	},
	getters,
	mutations,
	actions
});