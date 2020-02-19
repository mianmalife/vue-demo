<template>
  <div id="app">
    <div id="nav">
      <router-link to="/detail/1">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-view />
    </div>

    <!-- <HelloWorld @child_data="receiveFn" msg="Welcome to Your Vue.js App" ref="hello" :hello="hello" />
    <BroHelloWorld>
      <template>匿名大兄弟</template><br />
      <template v-slot:content>具名插槽</template><br />
      <template v-slot:footer="{footer,grand}" >作用域插槽模板{{footer}},{{grand}}</template><br />
    </BroHelloWorld>-->
    <IndexForm />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BroHelloWorld from './components/BroHelloWorld.vue'
import IndexForm from "@/components/form/index.vue";
export default {
  provide() {
    return {
      grand: "祖先信息"
    };
  },
  name: "App",
  data() {
    return {
      hello: "hi",
    };
  },
  components: {
    // HelloWorld,
    // BroHelloWorld
    IndexForm
  },
  mounted() {
    //console.log(this.$refs.hello.msg)
    //console.log(this.$children[0].msg)
  },
  methods: {
    receiveFn(data) {
      console.log(data);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
