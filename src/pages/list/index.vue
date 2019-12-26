<template>
  <div id="listContainer">
    <swiper indicator-dots autoplay circular interval="5000"
    indicator-color="#FDEA03" indicator-active-color="#FB7299">
      <swiper-item v-for="(item, key) in carousel" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>

    <div class="booksContainer">
      <div class="header">
        <span>全部商品</span>
        <span class="more" @click="toBooksList"> > </span>
      </div>
      <ul class="booksList">
        <li class="bookItem" v-for="(item, index) in booksList" :key="index">
          <img :src="item.image" alt="">
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import booksList from './datas/data.json'
  export default {
    data() {
      return {
        booksList:[]
      }
    },
    mounted() {
      this.booksList = booksList
    },
    computed: {
      carousel(){
        return [...this.booksList].splice(0, 5)
      }
    },
    methods: {
      toBooksList(){
        wx.navigateTo({
          url:'/pages/booksList/main?booksList=' + JSON.stringify(this.booksList)
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #listContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .booksContainer
      .header
        padding 20rpx
        .more
          float right
      .booksList
        display flex
        flex-wrap wrap
        .bookItem
          width 50%
          display flex
          flex-direction column
          align-items center
          border-bottom 1rpx solid #eee
          box-sizing border-box
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
            margin 20rpx
          p
            font-size 26rpx
            line-height 45rpx
 
</style>
