<template>
  <div id="searchContainer">
    <div class="header">
      <input type="text" confirm-type="search" @confirm="handleConfirm" v-model="searchContent" placeholder="书中自有颜如玉" placeholder-class="placeholder">
      <span @click="clearContent" class="clear" v-show="searchContent">x</span>
    </div>
    <div v-if="booksList.length">
      <BooksList :booksList="booksList"/>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'
import BooksList from '../booksList/index'
  export default {
    components:{
      BooksList
    },
    data() {
      return {
        searchContent:'',
        booksList:[]
      }
    },
    methods: {
      clearContent(){
        this.searchContent=''
      },
      async handleConfirm(){
        let searchContent = this.searchContent
        
        this.booksList = await request('/searchBooks',{req:searchContent})  
        console.log(this.booksList)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .header
      width 80%
      height 80rpx
      margin 20rpx auto
      border-bottom 1rpx solid #02a774
      position relative
      input
        width 100%
        height 100%
        .placeholder
          color #02a774
          text-align center
          font-size 24rpx
      .clear
        position absolute
        right 20rpx
        width 40rpx
        top 0
        line-height 80rpx
        z-index:99
</style>
