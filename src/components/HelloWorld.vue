<template>
  <div class="hello">
    <h1>{{ hello }},{{ msg }}</h1>
    <p>{{grand}}</p>
    <button @click="sendMsg">给兄弟打招呼</button>
  </div>
</template>

<script>
export default {
  inject: ['grand'],
  name: 'HelloWorld',
  props: {
    msg: String,
    hello: String
  },
  mounted() {
    // this.$emit('child_data', '儿子传来的');
  },
  methods: {
    sendMsg() {
      this.$parent.$emit('hi','兄弟好啊');
      this.$bus.$emit('haha','兄弟再次好啊');
      this.$bus1.$emit('bus1','兄弟又来消息了');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
