<template>
  <div id="app">
    <keep-alive exclude="Details"><router-view/></keep-alive>


   <tabbar></tabbar>

  </div>
</template>
<script>
  import tabbar from './components/tabbar/tabbar'
  export default {
    name:'app',
    components:{
      tabbar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
