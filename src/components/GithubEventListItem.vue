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
					result='<i class="fa fa-folder-o" aria-hidden="true"></i>'+result+'created repository '
					break;
				case 'WatchEvent':				
					result='<i class="fa fa-star" aria-hidden="true"></i>'+result+'starred '
					break;	
				case 'ForkEvent':
					result='<i class="fa fa-code-fork" aria-hidden="true"></i>'+result+'forked '	
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
