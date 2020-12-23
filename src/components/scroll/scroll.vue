<template>
  <div class="scroll" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name: "scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:Number
    },
    mounted(){
      this.scroll=new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        // pullUpLoad: this.pullUpLoad
        pullUpLoad:true
      })

      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('getpos',position)
      })
      this.scroll.on('pullingUp',()=>{
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
      })
    },
    methods:{
      refresh(){
        this.scroll.refresh()}
    }

  }
</script>

<style scoped>

</style>