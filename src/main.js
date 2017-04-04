import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import {store} from './store/store';

import IndexPage from './components/IndexPage.vue';
import GithubEventList from './components/GithubEventList.vue';

Vue.use(VueRouter);
const routes = [
	{path: '/feeds', component: GithubEventList},
	{path: '/', component: IndexPage},	
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
