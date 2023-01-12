<template>
  <div class="users">
    <h1>porject</h1>
    <ul>
      <li v-for="user in users">
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',
  props:{
    users:{
      type:Array,
      required:true
    }
  },
    methods:{
      deleteUser:function(){
        this.users.pop()
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .users{
    width:100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;

  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 100px;
    text-align: center;
    padding: 30px;
    border: 1px solid green;
    margin: 10px;
  }
</style>
