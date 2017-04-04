export default {
	updateGithubEvents(state, data){						
		state.githubEvents = [...state.githubEvents, ...data];
		
		localStorage.setItem('githubEvents',  JSON.stringify(state.githubEvents));
	},

	authUser(state, payload){			
		var {user} = payload;		
		state.user = {
			...user
		}		
	},
	incrementPage(state){
		state.page++;
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