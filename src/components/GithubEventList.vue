<template>
    <div class='github-event-list'>        
        <h1>Your Feed</h1>        
        <div v-for="gEvent in githubEvents">            
            <app-github-event-list-item :gEvent='gEvent'></app-github-event-list-item>            
        </div>
        
        <button class='btn btn-default btn-block' @click="loadMoreEvents()">Load more</button>
    </div>
</template>

<script>
    import GithubEventListItem from './GithubEventListItem.vue';      

    export default {
        computed: {
            githubEvents(){
                return this.$store.getters.githubEvents;
            }
        },
        components: {                 
            appGithubEventListItem: GithubEventListItem
        },
        created: function(){                        
            if(!this.$store.state.user)this.$router.push('/');
            else this.$store.dispatch('fetchGithubEvents',1);
        },
        methods: {
          loadMoreEvents(){            
            this.$store.dispatch('fetchGithubEvents', this.$route.query.page)
          }
        }        
    }
</script>
