<template>
  <div id="topbar">
    <div id="left"><slot name="s-left"></slot></div>
    <div id="center"><slot name="s-center"></slot></div>
    <div id="right"><slot name="s-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "topbar"
  }
</script>

<style scoped>
  #topbar{
    width: 320px;
    /*background-color: #ff8198;*/
    height: 44px;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/

  }
  #left{
    width: 60px;
    text-align: center;
    line-height: 44px;
    float: left;
    height: 44px;
  }
  #center{
    width: 200px;
    text-align: center;
    line-height: 44px;
    float: left;
    height: 44px;
  }
  #right{
    width: 60px;
    text-align: center;
    line-height: 44px;
    float: left;
    height: 44px;
  }
</style>