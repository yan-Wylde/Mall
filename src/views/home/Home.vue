<template>
  <div id="home">
    <topbar id="topbar">
      <div slot="s-center">购物街</div>
    </topbar>
    <tabcontrol
            :pops="pops"
            class="tabcontrol1"
            @tabclick="tabclick"
            ref="tabControl1" v-show="this.pos>this.tabOffsetTop" >
    </tabcontrol>
    <scroll
            class="content"
            ref="scroll"
            :probe-type="3"
            @getpos="getpos" @pullingUp="pullingUp">
      <home-swiper :datas="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommends :recommend="recommends"></recommends>
      <img src="../../assets/img/home/recommend_bg.jpg" alt="" id="recom">
      <tabcontrol :pops="pops" class="tabcontrol" @tabclick="tabclick" ref="tabControl2"></tabcontrol>
      <goodslist :aarray="goods[this.goodsdata].list"></goodslist>
    </scroll>
    <backtop @click.native="backtopclick" v-show="showbacktop"></backtop>
  </div>
</template>

<script>
  import scroll from '../../components/scroll/scroll'
  import topbar from '../../components/topbar/topbar'
  import HomeSwiper from  './childcom/HomeSwiper'
  import Recommends from './childcom/Recommends'
  import tabcontrol from  '../../components/tabcontrol/tabcontrol'
  import goodslist from '../../components/goods/goodslist'
  import backtop from '../../components/backtop/backtop'


  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  export default {
    name: "Home",
    components:{
      topbar,
      HomeSwiper,
      Recommends,
      tabcontrol,
      goodslist,
      scroll,
      backtop
    },
    data(){
      return {
        banners : [],
        recommends :[],
        pops:['流行','新款','精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        goodsdata:'pop',
        pos:0,
        leavePos:0,
        leave:0,
        tabOffsetTop:0
      }
    },
    created(){
      //1.获取轮播图数据
      getHomeMultidata().then(res=>
    {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })


      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted(){
      //1.文件加载完刷新
      const refresh=this.debounce(this.$refs.scroll.refresh,30)
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })

      //2.tabcontrol吸顶

    },
    activated(){
      this.$refs.scroll.scroll.scrollTo(0,this.leavePos,0.01)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.leavePos=this.$refs.scroll.scroll.y
    },
    computed:{
      showbacktop(){
        if (this.pos>1000){
          return true
        }
        else {
          return false
        }
      }
    },
    methods:{
      //防抖函数
      debounce(func,delay){
        let timer=null;
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer=setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },
      tabclick(index){
        if (index===0) {
          this.goodsdata='pop'
        }
        else if(index===1){
          this.goodsdata='new'
      }
      else {
          this.goodsdata='sell'
        }
        this.$refs.tabControl1.nowclick=index
        this.$refs.tabControl2.nowclick=index
      },
      getHomeGoods(type){
        getHomeGoods(type,this.goods[type].page + 1).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          // console.log(res);
          // console.log(this.goods[type].list);
        })
      },
      backtopclick(){
        // console.log(this.$refs.scroll);
        this.$refs.scroll.scroll.scrollTo(0,0,200)
      },
      getpos(position){
        this.pos=-position.y
        // console.log(this.pos);
      },
      pullingUp(){
        this.getHomeGoods(this.goodsdata)
        this.$refs.scroll.scroll.finishPullUp()
      },
      swiperImgLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      }

    }

  }
</script>

<style scoped>
  #topbar{
    background-color: #ff8198;
    color: #fff;
  }
  #recom{
    width: 320px;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabcontrol1{
    position: relative;
    z-index: 9;
  }
</style>