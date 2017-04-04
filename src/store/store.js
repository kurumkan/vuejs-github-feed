import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {		
		githubEvents: [],
		// githubEvents: [
  //           {
  //               actor: {                                                    
  //                 display_login: "tuckerconnelly",                          
  //                 url: "https://api.github.com/users/tuckerconnelly"                          
  //               },
  //               repo: {                          
  //                 name: "md-next/md-next",
  //                 url: "https://api.github.com/repos/md-next/md-next"
  //               },
  //               type: "CreateEvent"
  //           },
  //           {
  //               actor: {                                                    
  //                 display_login: "abc",                          
  //                 url: "https://api.github.com/users/tuckerconnelly"                          
  //               },
  //               repo: {                          
  //                 name: "md-next/md-next",
  //                 url: "https://api.github.com/repos/md-next/md-next"
  //               },
  //               type: "WatchEvent"
  //           },
  //           {
  //               actor: {                                                    
  //                 display_login: "cde",                          
  //                 url: "https://api.github.com/users/tuckerconnelly"                          
  //               },
  //               repo: {                          
  //                 name: "md-next/md-next",
  //                 url: "https://api.github.com/repos/md-next/md-next"
  //               },
  //               type: "ForkEvent"
  //           }
  //       ],		
		user:null,
		error: null
	},
	getters,
	mutations,
	actions
});