import types from './types'

const state = {
  cart: []
}

const mutations = {
  /**
   * 添加到购物车
   * @param {object} state
   * @param {object} goods
   */
  [types.ADD_GOODS](state, goods) {

  },

  /**
   * 删除某一种商品
   * @param {object} state
   * @param {number} goodsId
   */
  [types.DEL_ONE](state, goodsId) {

  }
}

const actions = {
  addCart({ commit }, goods) {
    commit(types.ADD_GOODS, goods)
  },
  delOne({ commit }, goodsId) {
    commit(types.DEL_ONE, goodsId)
  }
}

const getter = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

