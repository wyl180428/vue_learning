<template>
<div>
  <h1 id="title">{{message}}</h1>
    <button @click="btnClick">按钮</button>
</div>
</template>

<script>
    export default {
        name: "cpn",
        data(){
            return{
                message:'hello world'
            }
        },
        methods:{
            btnClick(){
                console.log('hello');
            }
        }
    }
</script>

<style scoped>
#title{
    color: aquamarine;
}
</style>