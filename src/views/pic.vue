<template>
  <div class="pic">
    <div class="page-btn" @click="changeImage(-1)">
      <span class="material-icons icon">chevron_left</span>
    </div>
    <figure class="pic-place">
      <img :src="mainImage" alt="img">
    </figure>
    <div class="page-btn" @click="changeImage(1)">
      <span class="material-icons icon">chevron_right</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pic',
  methods: {
    changeImage (move) {
      const index = parseInt(this.$route.params.pic)
      const maxIndex = this.$store.getters.imageLength - 1
      let moveTo = index + move
      if (moveTo < 0) {
        moveTo = 9
      } else if (moveTo > maxIndex) {
        moveTo = 0
      }
      this.$router.push('/pic/' + moveTo)
    }
  },
  computed: {
    mainImage () {
      return this.$store.state.images[this.$route.params.pic]
    }
  }
}
</script>

<style lang="scss" scoped>
.pic{
  display: flex;
  flex-flow: row nowrap;
  .page-btn{
    width: 15%;
    position: relative;
    z-index: 2;
    background-image: linear-gradient(to right, transparent 0%,transparent 100%);
    transition: background-image .3s;
    &::before{
      content: '';
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .icon{
      font-size: 50px;
      vertical-align: middle;
    }
    &:first-child{
      margin-right: -10%;
      &:hover{
        background-image: linear-gradient(to left, transparent 0%, #e6dee9 100%);
      }
    }
    &:last-child{
      margin-left: -10%;
      &:hover{
        background-image: linear-gradient(to right, transparent 0%, #e6dee9 100%);
      }
    }
  }
  .pic-place{
    width: 90%;
    margin: auto;
  }
}
</style>
