<template>
  <router-link class="pic" :to="'/pic/' + url">
    <figure>
      <img :src="imgSrc" alt="">
    </figure>
  </router-link>
</template>

<script>
export default {
  name: 'pic',
  props: ['url', 'imgSrc']
}
</script>

<style lang="scss" scoped>
.pic{
  width: 100%;
  display: block;
}
</style>
