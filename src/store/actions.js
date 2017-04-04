import axios from 'axios';
import {store} from './store.js'

export default {	
	//make a request to github api
	fetchGithubEvents(context, page=1){		
		var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
		axios.get(`https://api.github.com/users/${username}/received_events?access_token=${token}&page=${page}&per_page=10`)
		.then((response)=>{			
			context.commit('updateGithubEvents', response.data);
			store.commit({type: 'incrementPage'});
		})
		.catch((error)=>{
			context.commit('setError', 'Something went wrong. We are working on it.');
		});
	}	
}