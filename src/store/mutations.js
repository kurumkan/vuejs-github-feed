export default {
	updateGithubEvents(state, data){		
		state.githubEvents = data;
	},

	authUser(state, payload){			
		var {user} = payload;		
		state.user = {
			...user
		}		
	},
	signOut(state){
		state.user=null;
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		localStorage.removeItem('avatar_url');		
	},
	setError(state, error){				
		state.error = error;
	},
	removeError(state){
		state.error=null;
	}	
}