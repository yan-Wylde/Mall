<template>
  <div id="tabcontrol">
    <div v-for="(item,index) in pops"
         class="tabitem"
         @click="tabclick(index)"
         :class="{astyle:nowclick==index}">
      <div><span>{{item}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabcontrol",
    data(){
      return {
        nowclick:0
      }
    },
    props:{
        pops:Array
    },
    created(){
    },
    methods:{
      tabclick(index){
        this.nowclick=index
        this.$emit('tabclick',index)
      }
    }
  }
</script>

<style scoped>
  #tabcontrol{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #EEE;
    z-index: 9;
  }
  .tabitem{
    flex: 1;
  }
  .astyle span{
    color: #ff5777;
    border-bottom: #ff5777 2px solid;
  }
</style>