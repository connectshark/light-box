import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    setImages (state, images) {
      state.images = images
    }
  },
  actions: {
    init (context) {
      axios.get('https://dog.ceo/api/breeds/image/random/10')
        .then(res => {
          context.commit('setImages', res.data.message)
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
