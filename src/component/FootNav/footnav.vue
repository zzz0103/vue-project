<template>
  <div class="footnav">
    <router-link class="icc" to='/'>
      <i class="icon first"></i>
      <span>首页</span>
    </router-link>
    <router-link class="icc" to='/sort'>
      <i class="icon second"></i>
      <span>分类</span>
    </router-link>
    <router-link class="icc" to='/good'>
      <i class="icon three"></i>
      <span>识物</span>
    </router-link>
    <router-link class="icc" to='/car'>
      <i class="icon four"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="icc" to='/person'>
      <i class="icon five"></i>
      <span>个人</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem = 75;
.footnav
  position fixed
  bottom 0
  left 0
  width (750/$rem)rem
  height (98/$rem)rem
  background-color #ccc
  display flex
  .icc
    flex-grow 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    .icon
      width (39/$rem)rem
      height (39/$rem)rem
      background-image url('../../../public/images/footnav.png')
      display inline-block
      background-size cover
    .first
      background-position 0 346px
    .second
      background-position 0 170px
    .three
      background-position 0 299px
    .four
      background-position 0 220px
    .five
      background-position 0 252px
    span 
      height (24/$rem)rem
      margin-top (7/$rem)rem
      display block
</style>
