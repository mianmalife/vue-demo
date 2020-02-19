import Vue from 'vue'
import Vuex from 'vuex'
import count from '../module/count'
Vue.use(Vuex)



export default new Vuex.Store({

  modules: {
    modCount: count
  }
})
