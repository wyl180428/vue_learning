<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/home">
        <img slot="item-img" src="../../../project/supermall/src/assets/img/tabbar/home.png" alt="">
        <img slot="item-img-after" src="../../../project/supermall/src/assets/img/tabbar/homeafter .png">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/catmgroy">
        <img slot="item-img" src="../../../project/supermall/src/assets/img/tabbar/lei.png" alt="">
        <img slot="item-img-after" src="../../../project/supermall/src/assets/img/tabbar/leiafter.png">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/car">
      <img slot="item-img" src="../../../project/supermall/src/assets/img/tabbar/car.png" alt="">
      <img slot="item-img-after" src='../../../project/supermall/src/assets/img/tabbar/carafter.png' alt="">
      <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-img" src="../../../project/supermall/src/assets/img/tabbar/my.png" alt="">
        <img slot='item-img-after' src="../../../project/supermall/src/assets/img/tabbar/myafter.png" alt="">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from './components/tabbar/Tabbar.vue'
  import tabbaritem from './components/tabbar/Tabbaritem.vue'

  export default {
    components: {tabbar, tabbaritem},
    name: 'App',
  }
</script>

<style>
  @import url("./assets/css/base.css");
</style>
