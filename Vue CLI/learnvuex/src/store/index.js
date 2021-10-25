import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment() {
      this.state.counter++
    },
    decrement() {
      this.state.counter--
    },
    increment_counter(state,num) {
      this.state.counter += num
    }
  },
  actions: {
    ayncInfo(context){
      setTimeout(()=>{
        context.commit('increment_counter',10)
      },1000)
    }
  },
  getters: {},
  modules: {}
})

export default store
