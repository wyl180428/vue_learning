<template>
    <div class="tab-bar-item" @click="btnclick">
      <div v-if="!isAction"><slot name="item-img"></slot></div>
      <div v-else><slot name="item-img-after"></slot></div>
      <div :class="{active:isAction}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: 'tabbaritem',
    props:{
      path:String
    },
    // data(){
    //   return{
    //     isAction:false
    //   }
    // },
    computed:{
      isAction(){ 
        return !this.$route.path.indexOf(this.path)
        }
    },
    methods :{
      btnclick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: small;
  }

  .tab-bar-item img {
    width: 22px;
    margin-top:5px ;
    vertical-align:middle;
  }
  .active{
    color: #d4237a;
  }
</style>
