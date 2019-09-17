<template>
  <div>
   <div class="header">
     <div class="header-top">
       <a class="logo" href="javascript:;"></a>
       <div class="topsearch" @click="toSearch">
         <i class="icon"></i>
         <span>搜索商品, 共22672款好物</span>
       </div>
       <div class="logobtn">登录</div>
     </div>
      <div class="header-bottom">
        <div class="header-list1">
          <ul class="header-list" v-show="isShow">
          <li>推荐</li>
          <li>居家生活</li>
          <li>服饰箱包</li>
          <li>美食酒水</li>
          <li>全部频道</li>
          <li>全部频道</li>
          <li>全部频道</li>
         <li>全部频道</li>
          <li>全部频道</li>
        </ul>
        </div>
        <div class="icon" @click="showAllList">
             <i class="icon-bg"></i>
        </div>
        <div class="allList" v-show="!isShow">
          <h2>全部频道</h2>
          <ul>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>
            <li>全部频道</li>  
          </ul>
        </div>
      </div>
   </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll' 

export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    toSearch(){
      this.$router.push({
        path:'/search'
      })
    },
    showAllList(){
      this.isShow=!this.isShow
    }
  },
  mounted(){
    let huadong = new BScroll('.header-list1',{
    scrollX: true,
    click: true
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem = 75;
html,body
  margin 0 
  padding 0
  .header
    width (750/$rem)rem
    height 100%  
    position fixed
    top 0
    left 0
    .header-top
      display flex
      width (690/$rem)rem
      height (55.9/$rem)rem
      padding (16/$rem)rem (30/$rem)rem
      .logo
        width (138/$rem)rem
        height (40/$rem)rem
        background-image url('../../public/images/logo.png')
        display: inline-block;
        margin-top (8/$rem)rem
        margin-right: .26667rem;
        background-size: cover;
        background-position: center;
      .topsearch
        width (442/$rem)rem
        height (56/$rem)rem
        background-color: #ededed;
        border-radius 5px
        .icon
          display inline-block
          width (28/$rem)rem
          height (28/$rem)rem
          background-image url('../../public/images/topsearch.png') 
          margin (16/$rem)rem (30/$rem)rem
          margin-right .13333rem
          vertical-align middle
          background-size cover
          background-position center 
        span 
          color: #666;
      .logobtn
        width (74/$rem)rem
        height (40/$rem)rem
        border 1px solid red
        color red
        font-size .32rem;
        margin-left: .21333rem 
        text-align center
        line-height (40/$rem)rem
        margin-top (6/$rem)rem
    .header-bottom
      width (1399/$rem)rem 
      height (60/$rem)rem
      padding  0 (30/$rem)rem
      background-color #cccccc
      .header-list
        height (60/$rem)rem
        li
          float left
          font-family: PingFangSC-Light,helvetica,'Heiti SC'
          color #333
          height (60/$rem)rem
          padding 0 (16/$rem)rem
          font-size (28/$rem)rem
          line-height (60/$rem)rem 
      .icon
        position absolute
        right 0
        top (90/$rem)rem
        width (100/$rem)rem
        height (60/$rem)rem
        margin-left (60/$rem)rem
        text-align center
        .icon-bg
          background-image url('../../public/images/list01.png')
          width (30/$rem)rem
          height (30/$rem)rem
          margin-top (15/$rem)rem
          display inline-block
          background-size cover
      .allList
        h2
          width (720/$rem)rem
          height (60/$rem)rem
          padding-left (30/$rem)rem
        ul
          width (750/$rem)rem
          height (288/$rem)rem
          padding-top (24/$rem)rem
          li
            float left
            width (148/$rem)rem
            height (54/$rem)rem
            margin-left (30/$rem)rem
            margin-bottom (40/$rem)rem

</style>
