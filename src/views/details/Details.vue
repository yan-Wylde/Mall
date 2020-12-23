<template>
  <div id="details">
    <detailtopbar class="detailtopbar" @detailtopbarClick="detailtopbarClick" ref="detailtopbar"></detailtopbar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @getpos="getscrollY">
      <detail-swiper :detailImg="topImg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" ref="goods"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comments :comments="comments" ref="comments"></detail-comments>
      <goodlist :aarray="recommend" ref="recommend" id="detailrecommend"></goodlist>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import scroll from '../../components/scroll/scroll'
  import detailtopbar from './childcom/detailtopbar'
  import detailSwiper from './childcom/detailSwiper'
  import detailBaseInfo from './childcom/detailBaseInfo'
  import detailShopInfo from './childcom/DetailShopInfo'
  import detailGoodsInfo from './childcom/DetailGoodsInfo'
  import detailParamInfo from './childcom/DetailParamInfo'
  import detailComments from './childcom/detailComments'
  import goodlist from '../../components/goods/goodslist'
  import detailBottomBar from './childcom/detailBottomBar'

  import {getDetail,Goods,Shop,GoodsParam,getDetailRecommend} from "../../network/details";

  export default {
    name: "Details",
    components:{
      scroll,
      detailtopbar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      detailGoodsInfo,
      detailParamInfo,
      detailComments,
      goodlist,
      detailBottomBar

    },
    data(){
      return{
        iid:null,
        topImg:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        comments:{},
        recommend:[],
        offsetTopY:[],
        scrollY:0

      }
    },
    created(){
      this.iid=this.$route.params.iid
      getDetail(this.iid).then(res=>{
        // console.log(res);
        this.topImg=res.result.itemInfo.topImages

        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

        this.shop=new Shop(res.result.shopInfo)

        this.detailInfo = res.result.detailInfo;

        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        if (res.result.rate.cRate!==0) {
          this.comments=res.result.rate.list[0]
          // console.log(this.comments);
        }


      })

      getDetailRecommend().then(res=>{
        this.recommend=res.data.list
        // console.log(this.recommend);
      })




    },
    methods:{
      imageLoad() {
        // console.log(222);
        this.$refs.scroll.refresh()
        this.offsetTopY=[]
        this.offsetTopY.push(0)
        this.offsetTopY.push(this.$refs.param.$el.offsetTop-44)
        this.offsetTopY.push(this.$refs.comments.$el.offsetTop-44)
        this.offsetTopY.push(this.$refs.recommend.$el.offsetTop-44)
        // console.log(this.offsetTopY);
      },
      detailtopbarClick(index){
        // console.log(index);
        this.$refs.scroll.scroll.scrollTo(0,-this.offsetTopY[index],100)
      },
      getscrollY(pos){
        this.scrollY=-pos.y
        // this.$refs.detailtopbar.nowindex=2
        // console.log(this.scrollY);
        // console.log(this.offsetTopY[3]);

        //下面的代码其实可以通过在offsetTopY数组中添加第五个元素为无穷大，
        // 通过此种方法可以省去下面这两行if判断，而在for循环中即可实现i=3的情况，
        // 不会出现i+1为undefind的情况
        if (this.scrollY>this.offsetTopY[3]){
          this.$refs.detailtopbar.nowindex=3
        }
        for (let i=0;i<3;i++){
          if (this.offsetTopY[i]<this.scrollY&&this.offsetTopY[i+1]>this.scrollY){
            this.$refs.detailtopbar.nowindex=i
            return
          }
        }
      },
      addToCart(){
        const product={}
        product.image=this.topImg[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid

        this.$store.commit('addCart',product)
      }
    }
  }
</script>

<style scoped>
  #details{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
  .detailtopbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  #detailrecommend{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
</style>