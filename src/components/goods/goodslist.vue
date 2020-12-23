<template>
  <div class="goodlist">
    <goodlistitem v-for="item in aarray" :goodsItem="item"></goodlistitem>
  </div>
</template>

<script>
  import goodlistitem from './goodslistitem'
  export default {
    name: "goodslist",
    components:{
      goodlistitem
    },
    props:{
      aarray:Array
    },
    created(){
      // console.log('-------');
      // console.log(this.aarray);
    }
  }
</script>

<style scoped>
  .goodlist{
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>