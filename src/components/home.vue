<template>
  <div id="home">
  <h1>{{title1}}</h1>
    <users v-bind:users="users"></users>
  </div>
</template>

<script>
import Users from './Users'

export default {
  name: 'home',
  data(){
   return{
    title1:'This is a project',
    users: [

    ]
   }
  },
  components: {
    "users":Users,
  },
  created(){
    this.$http.get("/api/weixin_42110432?type=lately")
               .then((data)=>{
                  this.users = data.body;
        })
  }
}
</script>

<style>

</style>
