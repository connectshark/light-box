<template>
  <div class="picList">
    <pic v-for="(img, index) in getPictureList" :key="index"
    :imgSrc="img"
    :url="index"/>
  </div>
</template>

<script>
import pic from '../components/pic'
export default {
  name: 'picList',
  components: {
    pic
  },
  computed: {
    getPictureList () {
      return this.$store.state.images
    }
  }
}
</script>

<style lang="scss" scoped>
.picList{
  width: 90%;
  margin: auto;
  column-count: 3;
  column-gap: 10px;
}
</style>
