<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about">关于</router-link>-->
    <button @click="btnClick">首页</button>
    <button @click="newClick">关于</button>
    <router-link tag="button" v-bind:to="/User/+ userid">我的</router-link>
    <router-link :to="{path:'/myId',query:{name:'wyl',age:18,height:1.88}}" tag="button">档案</router-link>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userid: 'sd'
      }
    },
    methods: {
      btnClick() {
        this.$router.push('/home')
        console.log('bthClick');
      },
      newClick() {
        this.$router.push('/about')
        console.log('newClick');
      }
    }
  }
</script>

<style>

</style>
