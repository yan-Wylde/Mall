<template>
    <div id="tabbar">
      <tabbaritem path="/home">
        <img src="../../assets/img/tabbar/home.svg" alt="" slot="itemimg">
        <img src="../../assets/img/tabbar/home_active.svg" alt="" slot="itemactiveimg">
        <div slot="itemtext">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img src="../../assets/img/tabbar/category.svg" alt="" slot="itemimg">
        <img src="../../assets/img/tabbar/category_active.svg" alt="" slot="itemactiveimg">
        <div slot="itemtext">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img src="../../assets/img/tabbar/shopcart.svg" alt="" slot="itemimg">
        <img src="../../assets/img/tabbar/shopcart_active.svg" alt="" slot="itemactiveimg">
        <div slot="itemtext">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img src="../../assets/img/tabbar/profile.svg" alt="" slot="itemimg">
        <img src="../../assets/img/tabbar/profile_active.svg" alt="" slot="itemactiveimg">
        <div slot="itemtext">我的</div>
      </tabbaritem>
  </div>
</template>

<script>
  import tabbaritem from './tabbaritem'
  export default {
    name: "tabbar",
    components:{
      tabbaritem
    },
    methods:{

    }
  }
</script>

<style scoped>
#tabbar{
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
}

</style>