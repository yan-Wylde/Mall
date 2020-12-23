<template>
  <div id="cart">
    <cart-top-bar></cart-top-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
  import cartTopBar from './childcom/cartTopBar'
  import cartList from './childcom/CartList'
  export default {
    name: "Cart",
    components:{
      cartTopBar,
      cartList
    }
  }
</script>

<style scoped>

</style>