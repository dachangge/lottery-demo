<template>
  <div id="app">
    <div class="lottery_bg">
      <div class="lottery_title1"></div>
      <div class="lottery_title2"></div>
      <div class="lottery_num_content">
        <div class="lottery_num">
          {{lotteryNum}}
        </div>
      </div>
      <!--<touch-ripple  class="button-group-box" color="#3c763d" :speed="0.7" >-->
      <div  class="lottery_button css17040173561f069" @click="toggleLottery(buttonName)">
          {{buttonName}}
      </div>
      <!--</touch-ripple>-->
      <div class="lottery_set css1704cfa8411f069">
          <span @click="showWinners">[中奖名单]</span>
          <span @click="handleSetClick">[设置]</span>
      </div>
      <winners ref="winners"></winners>
      <settings ref="settings"></settings>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import settings from './components/settings'
import winners from './components/winners'
import screenfull from 'screenfull'
export default {
  name: 'app',
  components: {
    winners,
    settings
  },
  data () {
    return {
      lotteryNum: '07',
      buttonName: '开始抽奖',
      runStatus: 0,
      timer: null
    }
  },
  computed: {
    ...mapGetters([
      'lotteryResult'
    ]),
    ...mapState([
      'numberResult'
    ])
  },
  methods: {
    fullScreen () {
      if (screenfull.enabled) {
        screenfull.request()
      }
    },
    toggleLottery (btn) {
      if (btn === '开始抽奖') {
        this.buttonName = '停'
        this.runStatus = 1
        this.timer = setTimeout(() => {
          this.lotteryNum = this.getRandomNumber()
          if (this.runStatus === 1) {
            this.toggleLottery('开始抽奖')
          }
        }, 10)
      } else if (btn === '停') {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.lotteryNum = this.getRandomNumber()
        this.runStatus = 0
        this.buttonName = '开始抽奖'
        this.$store.commit('addResult', this.lotteryNum)
      }
    },
    stopByTimers (sec, time) {
      let num = this.getRandomNumber()
      this.lotteryNum = num
      console.error(num)
      if (sec !== 0) {
        setTimeout(() => {
          time += 100
          this.stopByTimers(--sec, time)
        }, time)
      } else {
        this.runStatus = 0
        this.buttonName = '开始抽奖'
      }
    },
    showWinners () {
      this.$refs.winners.toggle()
    },
    getRandomNumber () {
      const minnum = 1
      const maxnum = 44
      let randomnum = parseInt( Math.random() * (maxnum - minnum + 1) + minnum , 10 ) + ''
      if (randomnum.length === 1) {
        randomnum = '0' + randomnum
      }
      if (this.numberResult.indexOf(randomnum) !== -1) {
        return this.getRandomNumber()
      }
      return randomnum + ''
    },

    handleSetClick () {
      this.$refs.settings.toggle()
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .lottery_bg{
    width: 1280px;
    height: 512px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background:url('./assets/img/lottery_bg.png')  no-repeat;
    background-size: 100% 100%;
    color: #C50010;
    font-weight: bold;
    .lottery_title1{
      width: 576px;
      height: 54px;
      background:url('./assets/img/lottery_title1.png')  no-repeat;
      background-size: 100% 100%;
      margin: 49px auto 0;
    }
    .lottery_title2{
      width: 395px;
      height: 109px;
      background:url('./assets/img/lottery_title2.png')  no-repeat;
      background-size: 100% 100%;
      margin: 10px auto 0;
    }
    .lottery_num_content{
      box-sizing: border-box;
      height: 134px;
      width: 614px;
      background: #fff;
      margin: 20px auto;
      border-radius: 18px;
      .lottery_num{
        width: 100%;
        line-height: 134px;
        font-size: 72px;

      }
    }
    .lottery_button{
      cursor: pointer;
      width: 234px;
      height: 61px;
      margin: 0 auto;
      background: #FEE32D;
      font-size: 32px;
      line-height: 61px;
      border-radius: 18px;
      letter-spacing: 5px;
    }
    .lottery_set{
      line-height: 50px;
      font-size: 16px;
      color: #FEE32D;
      font-weight: normal;
      letter-spacing: 2px;
      span{
        cursor: pointer;
      }
      span:first-child{
        margin-right: 10px;
      }
    }
  }
}
</style>

