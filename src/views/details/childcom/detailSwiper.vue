<template>
  <div id="detailSwiper">
    <swiper class="detailsone">
      <swiper-item v-for="data in detailImg">
          <img :src="data" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/swiper/index'
  export default {
    name: "detailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      detailImg:Array,
      test:Object
    },

  }
</script>

<style scoped>
  .detailsone{
    height: 300px;
    overflow: hidden;
  }
</style>