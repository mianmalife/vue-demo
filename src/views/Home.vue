<template>
  <div class="home">
    <HelloWorld hello="hello" msg="Welcome to Your Vue.js App" />

    <div v-for="item in list" :key="item.id">
      <router-link :to="`/detail/${item.id}`">{{item.name}}</router-link>
    </div>
    <router-view />
    <h2>{{$store.state.modCount.count}},<span>剩余数量{{$store.getters['modCount/remaining']}}</span></h2>
    <button @click="add">vuex按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      list: [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" }
      ]
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    add() {
      //this.$store.commit('modCount/increment')
      this.$store.dispatch("modCount/asyncIncrement").then(result => {
        console.log(result)
      }).catch(() => {
        alert('没货了')
      })
    }
  },
};
</script>
