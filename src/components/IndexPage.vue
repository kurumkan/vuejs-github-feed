<template>
    <div>
      <div v-if='user'>
        <router-link class='btn btn-primary btn-block' to='/feeds'>
          Read Newsfeed
        </router-link>
      </div>
      <div v-else>
        <a href='/auth/github' class='btn btn-primary btn-block'>            
            Sign up with github
        </a>              
      </div>  
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
