import axios from 'axios';

export default {	
	fetchGithubEvents(context, id){
		var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
		axios.get('https://api.github.com/users/'+username+'/received_events?access_token='+token)
		.then((response)=>{								
			context.commit('updateGithubEvents', response.data);
		})
		.catch((error)=>{
			context.commit('setError', 'Something went wrong. We are working on it.');
		});
	}
}