import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartGoods:[]
  },
  mutations: {
    addCart(state,product){
      let oldProduct=null
      for (let i=0;i<this.state.cartGoods.length;i++){
        if (this.state.cartGoods[i].iid===product.iid){
          oldProduct=this.state.cartGoods[i]
        }
      }
        if (oldProduct){
          oldProduct.counter++
        } else {
          product.counter=1
          this.state.cartGoods.push(product)
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
