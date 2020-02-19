import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

class MyBus {
  constructor() {
    // {
    // eventName1:[fn1,fn2],
    // eventName2:[fn3,fn4],
    // }
    this.callback = {}
  }

  $on(name, fn) {
    this.callback[name] = this.callback[name] || [];
    this.callback[name].push(fn);
  }

  $emit(name, args) {
    if (this.callback[name]) {
      this.callback[name].forEach(cb => cb(args));
    }
  }
}

Vue.prototype.$bus1 = new MyBus();

//事件总线 $bus
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
