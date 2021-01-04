<template>
  <div class="home">
    <div class="gallery">
      <pic v-for="(img, index) in getPictureList" :key="index"
      :imgSrc="img.download_url"
      :url="index"/>
    </div>
  </div>
</template>

<script>
import pic from '../components/pic'
export default {
  name: 'Home',
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
.home{
  .gallery{
    width: 90%;
    margin: auto;
    column-count: 1;
    column-rule: 10px;
  }
}
</style>
