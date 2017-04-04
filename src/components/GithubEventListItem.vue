<template>
    <div class='github-event-list-item'  v-html="gEventString"></div>
</template>

<script>	
	export default {
	  props: ['gEvent'],
	  computed: {
	  	gEventString(){
	  		var result = `<a href="https://github.com/${this.gEvent.actor.login}" target="_blank">${this.gEvent.actor.display_login}</a> `;
	  		switch(this.gEvent.type){
				case 'CreateEvent':
					result+='created repository '
					break;
				case 'WatchEvent':
					result+='starred '
					break;	
				case 'ForkEvent':
					result+='forked '	
					break;		
				default:
					result+='did something with '		
	  		}
	  		result+=`<a href="${this.gEvent.repo.url.replace('https://api.', 'https://').replace('/repos/','/')}" target="_blank">${this.gEvent.repo.name}</a> `;

	  		return result;	  		
	  	}
	  }
	}
</script>
