<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/picList">picture list</router-link>
    </div>
    <router-view/>
    <div class="light-box" v-show="this.$route.meta.lightBox">
      <div class="btn" @click="backHandler">
        <span class="material-icons icon">close</span>
      </div>
      <div class="content">
        <router-view name="lightBox"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backHandler () {
      const count = this.$store.state.backCount * -1
      this.$router.go(count)
      this.$store.commit('resetCount')
    }
  },
  created () {
    this.$store.dispatch('init')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.2/iconfont/material-icons.min.css');
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.light-box{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .8);
  height: 100vh;
  &::before{
    content: '';
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .content{
    width: 90%;
    background-color: #fff;
    display: inline-block;
    vertical-align: middle;
  }
  .btn{
    position: absolute;
    background-color: #ccc;
    border-radius: 50%;
    top: 10%;
    left: 10%;
    width: 30px;
    height: 30px;
    z-index: 3;
    .icon{
      font-size: 30px;
    }
  }
}
img{
  width: 100%;
  vertical-align: middle;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
