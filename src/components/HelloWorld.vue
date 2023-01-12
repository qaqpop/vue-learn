<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>one Links</h2>
    <ul>
      <li><a href="https://www.cnblogs.com/" target="_blank">bokeyuan</a></li>
      <li><a href="https://www.csdn.net/" target="_blank">CSDN</a></li>
      <li><a href="https://chrome.zzzmh.cn/index#/index" target="_blank">chrome extend</a></li>
      <li><a href="https://www.dbbqb.com/" target="_blank">dbbqb</a></li>
      <br>
      <li><a href="https://code.woboq.org/userspace/glibc/" target="_blank">glib</a></li>
    </ul>
    <h2>two Links</h2>
    <ul>
      <li><a href="https://tool.lu/favicon/" target="_blank">favicon</a></li>
      <li><a href="https://cn.bing.com/?FORM=BEHPTB&ensearch=1" target="_blank">bing</a></li>
      <li><a href="https://zh.cppreference.com/w/%E9%A6%96%E9%A1%B5" target="_blank">cpp</a></li>
      <li><a href="https://www.docin.com/" target="_blank">douding</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
