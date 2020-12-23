<template>
  <div id="cartTopBar">
    <topbar>
      <div slot="s-center">购物车({{this.$store.state.cartGoods.length}})</div>
    </topbar>
  </div>
</template>

<script>
  import topbar from '../../../components/topbar/topbar'
  export default {
    name: "cartTopBar",
    components:{
      topbar
    }
  }
</script>

<style scoped>
 #cartTopBar{
   background-color: #ff8198;
   color: #fff;
 }
</style>