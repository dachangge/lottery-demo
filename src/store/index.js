import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    numberResult: [],
    lotteryResult: []
  },
  getters: {
    // lotteryResult: () => {
    //   if (localStorage.getItem('lotteryResult')) {
    //     return JSON.parse(localStorage.getItem('lotteryResult'))
    //   } else {
    //     // level: 1,2,3 ; name: 名字 ; number: 01 ~44
    //     return []
    //   }
    // }
    // numberResult: () => {
    //   if (localStorage.getItem('lotteryResult')) {
    //     return JSON.parse(localStorage.getItem('lotteryResult')).map((val) => val.number)
    //   } else {
    //     return []
    //   }
    // }
  },
  mutations: {
    addResult (state, num) {
      state.numberResult.push(num)
      // let res = localStorage.getItem('lotteryResult') ? JSON.parse(localStorage.getItem('lotteryResult')) : []
      // if (res.length < 5) {
      //   res.push({ level: 3, name: '', number: num })
      //   state.numberResult.push(num)
      // } else if (res.length < 8) {
      //   res.push({ level: 2, name: '', number: num })
      //   state.numberResult.push(num)
      // } else if (res.length < 9) {
      //   res.push({ level: 1, name: '', number: num })
      //   state.numberResult.push(num)
      // }
      // localStorage.setItem('lotteryResult', JSON.stringify(res))
    },
    deleteResult (state, num) {
      let idx = state.numberResult.indexOf(num)
      if (idx !== -1) {
        state.numberResult.splice(idx, 1)
      }
    },
    toggleResult (state, num) {
      let idx = state.numberResult.indexOf(num)
      if (idx !== -1) {
        state.numberResult.splice(idx, 1)
      } else {
        state.numberResult.push(num)
      }
    },
    setResult (state, arr) {
      state.numberResult = arr
    },
    setLotteryResult (state, arr) {
      state.lotteryResult = arr
    }
  }
})

export { store }
