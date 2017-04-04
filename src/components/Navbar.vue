<template>
    <div id="header">
        <nav class="navbar navbar-custom">
          <div class="container-fluid">            
            <div class="navbar-header">
              <button v-if='user' type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link class="navbar-brand" to='/'>
                <i class="fa fa-github github-logo" aria-hidden="true"></i>
                <span class='navbar-logo-text'>Github Viewer App</span>
              </router-link>              
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div v-if='user' class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">              
              <ul class="nav navbar-nav">
                <router-link tag="li" to="/feeds">
                  <a>Feeds</a>
                </router-link>        
              </ul>
              <ul class="nav navbar-nav navbar-right">                
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    {{user.username}} 
                    <img v-bind:src='user.avatar_url' class='profileImage'>
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">                                        
                    <li>
                      <button @click="signOut()" class='btn btn-danger btn-block'>Sign out</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    export default {
        computed: {
            user(){                            
              return this.$store.getters.user;              
            }
        },
        methods: {
          signOut(){
            this.$store.commit({type: 'signOut'});
            this.$router.push('/');
          }            
        }
    }
</script>

