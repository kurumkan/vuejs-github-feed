export default {
	user(state){		
		return state.user;
	},
	githubEvents(state){		
		var {githubEvents} = state;		
		
		if(!githubEvents.length)githubEvents = JSON.parse(localStorage.getItem('githubEvents'));

		return state.githubEvents;
	},
	error(state){		
		return state.error;
	},
	page(state){
		return state.page
	}
}