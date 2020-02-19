export default {
    namespaced: true,
    //保存数据状态
    state: {
      count: 0
    },
    //从state派生出新状态，类似计算属性
    getters: {
      remaining(state) {
        return 10 - state.count;
      }
    },
    //修改状态
    mutations: {
      increment(state) {
        state.count += 1
      }
    },
    //复杂业务逻辑 类似mvc 中的controller
    actions: {
      increment({getters, commit}) {
        if(getters.remaining>0) {
          commit('increment');
          return true;
        }
        return false
      },
      asyncIncrement({getters, commit}) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(getters.remaining>0) {
              commit('increment');
              resolve(true);
              // return true;
            }
            reject(false);
            // // return false
  
          }, 2000)
        })
      }
    }
}