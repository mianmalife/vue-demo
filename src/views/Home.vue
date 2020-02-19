<template>
  <div class="home">
    <HelloWorld hello="hello" msg="Welcome to Your Vue.js App" />

    <div v-for="item in list" :key="item.id">
      <router-link :to="`/detail/${item.id}`">{{item.name}}</router-link>
    </div>
    <router-view />
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
  }
};
</script>
