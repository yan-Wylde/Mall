<template>
  <div id="tabbaritem" @click="itemclick">
    <div v-if="isshow"><slot name="itemimg"></slot></div>
    <div v-else><slot name="itemactiveimg"></slot></div>
   <div :class="{'isactive':!isshow}"><slot name="itemtext"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabbaritem",
    props:{
      path:String,
    },
    computed:{
      isshow(){
        return this.$route.path.indexOf(this.path)==-1
      }
    },
    methods:{
      itemclick(){
        this.$router.replace(this.path);
      }

    }
  }
</script>

<style scoped>
  #tabbaritem{
    flex: 1;
    height: 49px;
    text-align: center;
  }
  #tabbaritem img{
    width: 24px;
    height: 24px;
  }
  .isactive{
    color: #ff8198;
  }
</style>