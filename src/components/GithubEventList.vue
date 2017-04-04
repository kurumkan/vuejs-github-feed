<template>
    <!-- Component will render all the events as a list -->
    <div class='github-event-list container-fluid'>        
        <div class='row'>
            <div class='col-md-3'>
            </div>
            <div class='col-md-6'>
                <h1>Your Feed</h1>        
                <div v-for="gEvent in githubEvents">            
                    <app-github-event-list-item :gEvent='gEvent'></app-github-event-list-item>            
                </div>

                <button class='btn btn-default btn-block' @click="loadMoreEvents()">Load more</button>
            </div>
            <div class='col-md-3'>
            </div>    
        </div>
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
            //only authorized user can see the component's content                
            if(!this.$store.state.user)this.$router.push('/');
            else this.$store.dispatch('fetchGithubEvents',1);
        },
        methods: {
          loadMoreEvents(){              
            this.$store.dispatch('fetchGithubEvents', this.$store.state.page)
          }
        }        
    }
</script>
