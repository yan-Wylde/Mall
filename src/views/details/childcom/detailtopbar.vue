<template>
  <div id="detailtopbar">
    <topbar>
      <div class="left" slot="s-left" @click="leftclick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="s-center" class="center">
        <div
                v-for="(item,index) in titles"
                class="item" @click="centerclick(index)"
                :class="{'isred':nowindex==index}">{{item}}</div>
      </div>
    </topbar>
  </div>
</template>

<script>
  import topbar from '../../../components/topbar/topbar'
  export default {
    name: "detailtopbar",
    components:{
      topbar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        nowindex:0
      }
    },
    methods:{
      leftclick(){
        this.$router.go(-1)
      },
      centerclick(index){
       this.nowindex=index
       //  console.log(index);
        this.$emit('detailtopbarClick',index)
      }
    }
  }
</script>

<style scoped>
  #detailtopbar{
    background-color: #fff;
  }
  .left{
    margin-top: 6px;
    margin-left: 6px;
  }
  .center{
    display: flex;
  }
  .item{
    flex: 1;
  }
  .isred{
    color: #ff8198;
  }
</style>