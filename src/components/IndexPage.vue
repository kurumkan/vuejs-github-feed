<template>
  <!-- Index page component -->
  <div class="jumbotron">
    <h2>Github Viewer App</h2>      
    <p>
      Explore your github newsfeed
      <div v-if='user'>
        <router-link class='btn btn-primary btn-lg' to='/feeds'>
          Read Newsfeed
        </router-link>
      </div>
      <div v-else>
        <a href='/auth/github' class='btn btn-primary btn-lg'>            
            Sign up with github
        </a>              
      </div>  
    </p>
  </div>

</template>

<script>    
    export default {
        computed: {
            user(){                                          
              return this.$store.getters.user;              
            }
        },
        created: function(){
          //if there are valid params - authorize user
          var {token, username, avatar_url} = this.$route.query;                    
          if(token && username && avatar_url) {                  
            this.$store.commit({
              type: 'authUser',
              user:{
                username,
                avatar_url
              }
            });                       
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            localStorage.setItem('avatar_url', avatar_url);
            this.$router.push('/feeds');            
          }
        }
    }
</script>
