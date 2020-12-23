<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in $store.state.cartGoods"
        :key="index"
        :item="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../../components/scroll/scroll'
  import CartListItem from './CartListItem'

  export default {
    name: "CartList",
    components:{
      Scroll,
      CartListItem,
    },
    data(){
      return {
        cartLIst:this.$store.state.cartGoods
      }
    },
    activated(){
      this.$refs.scroll.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    height:calc(100% - 44px - 49px);

  }
  .content{
    height: 100vh;
    overflow: hidden;
  }
</style>
