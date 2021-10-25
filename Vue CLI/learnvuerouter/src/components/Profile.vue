<template>
<div>
  <h2>我是profile组件</h2>
  <h2>{{this.$route.query}}</h2>
  <h2>{{this.$route.query.name}}</h2>
  <h2>{{(this.$route.query.age)}}</h2>
</div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>
