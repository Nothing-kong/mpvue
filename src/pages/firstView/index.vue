<template>
  <div id="firstViewContainer">
    <swiper :indicator-dots="index!==3" @change="handleChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toList" class="btn" v-show="index===3">开始体验</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        index : 0
      }
    },
    methods: {
      toList(){
        wx.switchTab({
          url:'/pages/list/main'
        })      
      },
      handleChange(event){
        this.index = event.mp.detail.current
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #firstViewContainer
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      width 280rpx
      height 80rpx
      line-height 80rpx
      text-align center
      position absolute
      bottom 20rpx
      left 50%
      margin-left -140rpx
      background rgba(255,255,255,0.4)
 
</style>
