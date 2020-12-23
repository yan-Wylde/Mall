<template>
  <div id="detailComments" v-if="Object.keys(comments).length !== 0">
    <div>
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comUser">
      <img :src="comments.user.avatar" alt="">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="content">
      {{comments.content}}
    </div>
    <div class="">
      <span>{{comments.created}}</span>
      <span>{{comments.style}}</span>
    </div>
    <div v-if="comments.user.profileUrl">
      <img src="comments.user.profileUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailComments",
    props:{
      comments:Object
    }
  }
</script>

<style scoped>
  #detailComments{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .comUser{
    font-size: 16px;
  }
  .comUser img{
    width: 30px;
    height: 30px;
  }
</style>