<template>    
    <!-- render an error message -->
    <div class='error-alert'>        
        <div v-if='error'>
            <div class="alert alert-danger" role="alert"><strong>Oops! </strong>{{error}}</div>
        </div>
        <div v-else>        
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            error(){
                return this.$store.getters.error;
            }
        }        
    }
</script>
