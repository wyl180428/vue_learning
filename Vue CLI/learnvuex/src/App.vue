<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="add_click">+</button>
    <button @click="sub_click">-</button>
    <button @click="add_click_counter(5)">+5</button>
    <button @click="add_count">+10</button>
    <hello_vuex></hello_vuex>
  </div>
</template>

<script>
  import hello_vuex from "./components/hellovuex";

  export default {
    name: 'App',
    components: {
      hello_vuex
    },
    methods:{
      add_click(){
        this.$store.commit('increment')
      },
      sub_click(){
        this.$store.commit('decrement')
      },
      add_click_counter(num){
        this.$store.commit('increment_counter',num)
      },
      add_count(){
        this.$store.dispatch('ayncInfo')
      }
    }
  }
</script>

<style>

</style>
