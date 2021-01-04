import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    backCount: 0
  },
  mutations: {
    setImages (state, images) {
      state.images = images
    },
    resetCount (state) {
      state.backCount = 0
    },
    increaseCount (state) {
      state.backCount += 1
    }
  },
  actions: {
    init (context) {
      axios.get('https://picsum.photos/v2/list?limit=10')
        .then(res => {
          context.commit('setImages', res.data)
        })
    }
  },
  getters: {
    imageLength (state) {
      return state.images.length
    }
  },
  modules: {
  }
})
