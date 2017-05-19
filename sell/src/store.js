/**
 * Created by Administrator on 2017/5/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBarOpened: false
    // 放置公用状态
  },
  getters: {
    changeState: state => {
      // 相当于vue实例中的methods,用于处理公用data
      // 自vuex 面向组件的数据处理
    }
  },
  mutations: {
    // 写法与getters相类似
    // 组件想要对于vuex 中的数据进行的处理
    // 组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    // 内部操作必须在此刻完成(同步)
  },
  actions: {
    // 使得mutations能够实现异步调用，实现例如延迟调用
    increment ({ commit }, payload) {
      commit('突变方法名')
      // payload应该是一个对象，可通过模板方法调用传入对象的方式将数据从组件传入vuex
    },
    asyncIncrement ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
    // 引入某一个state的以上集合的模块，会自动分别填充到上面，使得结构更加清晰
  }
})

