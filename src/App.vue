<template>
  <div id="app" v-cloak>
    <keep-live>
      <router-view/>
    </keep-live>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
*::before{
  box-sizing: border-box;
}
*::after{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
[v-cloak] {
    display: none !important;
}
</style>
