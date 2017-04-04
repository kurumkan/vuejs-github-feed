<template>    
  <div class='container-fluid'>    
    <div class='row'>
      <app-navbar></app-navbar>
    </div>
    <div class='row'>
      <div class='col-md-2'>
      </div>
      <div class='col-md-8'>      
        <app-alert></app-alert>
        <router-view></router-view>
      </div>
      <div class='col-md-2'>
      </div>
    </div>
  </div>    
</template>

<script>
  import Navbar from './components/Navbar.vue';  
  import GithubEventList from './components/GithubEventList.vue';  
  import Alert from './components/Alert.vue';
  import {store} from './store/store.js'

  //if there is a token in localStorage - the user has logged in previously
  var token = localStorage.getItem('token');  
  if(token){          
    var username = localStorage.getItem('username');    
    var avatar_url = localStorage.getItem('avatar_url');            
    store.commit({
      type: 'authUser',
      user:{
        username,
        avatar_url
      }
    });
  }

  export default { 
    components: {        
        appNavbar: Navbar,
        appGithubEventList: GithubEventList,
        appAlert: Alert
    }
  }
</script>
