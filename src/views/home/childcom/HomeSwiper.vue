<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="data in datas">
        <a :href="data.link">
          <img :src="data.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/swiper/index'

  export default {
    name: "HomeSwiper",
    props:{
      datas:Array
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperImgLoad(){
        this.$emit('swiperImgLoad')
      }
    }
  }
</script>

<style scoped>
</style>