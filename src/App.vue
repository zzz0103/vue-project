<template>
  <div>
    <router-view></router-view>
    <FootVav></FootVav>
  </div>
</template>

<script>
import FootVav from './component/FootNav/footnav'
export default {
  components:{
    FootVav
  },
  data() { 
    return {

    }
  }
 }
</script>

<style scoped>
</style>