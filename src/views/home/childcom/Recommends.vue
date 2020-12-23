<template>
  <div id="recommends">
    <div v-for="item in recommend" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="word">{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>

  export default {
    name: "Recommends",
    props:{
      recommend:Array
    }
  }
</script>

<style scoped>
#recommends{
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: #eee 10px solid;
}
.item{
  flex: 1;
}
  img{
    width: 70px;
    height: 70px;
  }
  .word{
    margin-top: 12px;
  }
</style>