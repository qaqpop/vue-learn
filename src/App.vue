<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/helloworld">HelloWorld</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/element">Element</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
   return{

   }
 }
}
</script>

<style>

</style>
