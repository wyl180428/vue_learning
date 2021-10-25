<template>
  <div>
    <h2>用户界面</h2>
    <h2>{{ $route.params.userid }}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userid
      }
    }
  }
</script>

<style scoped>

</style>
