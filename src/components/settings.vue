<template>
  <div class="settings" v-if="flag">
    <div class="settings_wapper"></div>
    <div class="settings_bg">
      <div class="close_icon" @click="toggle"></div>
      <div class="title">
        <span :class="{active: tab === 0}" @click="tab = 0">中奖名单</span>
        <span :class="{active: tab === 1}" @click="tab = 1">全员名单</span>
      </div>
      <div class="content" v-if="tab === 0">
        <ul>
          <li>
              <span>三等奖</span>
              <input type="text" v-model="lotteryResultClone[0]">
              <input type="text" v-model="lotteryResultClone[1]">
              <input type="text" v-model="lotteryResultClone[2]">
              <input type="text" v-model="lotteryResultClone[3]">
              <input type="text" v-model="lotteryResultClone[4]">
          </li>
          <li>
            <span>二等奖</span>
            <input type="text" v-model="lotteryResultClone[5]">
            <input type="text" v-model="lotteryResultClone[6]">
            <input type="text" v-model="lotteryResultClone[7]">
          </li>
          <li>
            <span>一等奖</span>
            <input type="text" v-model="lotteryResultClone[8]">
          </li>
        </ul>
      </div>
      <div class="content" v-else>
        <ul class="pieces">
          <li v-for="num in 44" :key="num" :class="{'active': resultClone.indexOf(getString(num)) !== -1}"  @click="toggleResult(num)">{{getString(num)}}</li>
        </ul>
      </div>

      <div class="lottery_set1 css1704cfa8411f069">
        <span @click="HandleOkClick">确定</span>
        <span @click="HandleCancelClick">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'settings',
  data () {
    return {
      flag: false,
      tab: 0,
      resultClone: [],
      lotteryResultClone: []
    }
  },
  computed: {
    ...mapState([
      'numberResult',
      'lotteryResult'
    ])
  },
  methods: {
    getString (num) {
      return num < 10 ? '0' + num : '' + num
    },
    toggle () {
      this.flag = !this.flag
      if (this.flag) {
        this.resultClone = JSON.parse(JSON.stringify(this.numberResult))
        this.lotteryResultClone = JSON.parse(JSON.stringify(this.lotteryResult))
      }
    },
    HandleOkClick () {
      this.flag = false
      if (this.tab === 1) {
        this.$store.commit('setResult', this.resultClone)
      } else if (this.tab === 0) {
        this.$store.commit('setLotteryResult', this.lotteryResultClone)
      }
    },
    HandleCancelClick () {
      this.flag = false
    },
    toggleResult (num) {
      num = this.getString(num)
      let idx = this.resultClone.indexOf(num)
      if (idx !== -1) {
        this.resultClone.splice(idx, 1)
      } else {
        this.resultClone.push(num)
      }
      console.log(this.resultClone)
      // this.$store.commit('toggleResult', this.getString(num))
    }
  }
}
</script>

<style lang="scss">
  .settings{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    .settings_wapper{
      width: 100%;
      height: 100%;
      background: #484848;
      opacity: .63;
    }
    .settings_bg{

      .close_icon{
        cursor: pointer;
        position: absolute;
        top: 44px;
        right: 16px;
        width: 30px;
        height: 30px;
        background: url("../assets/img/close_icon.png") no-repeat;
        background-size: 100% 100%;
      }
      .title{
        line-height: 50px;
        font-size: 26px;
        text-align: left;
        font-weight: normal;
        margin-top:20px;
        span{
          margin: 0 20px;
          cursor: pointer;
          &.active{
            color: yellow;
          }
        }
      }
      .content{
        ul{
          text-align: left;
          list-style: none;
          margin:10px 20px 0;
          padding: 0;
          line-height: 40px;
          font-size: 24px;
          font-weight: normal;
          li{
            margin-top: 60px;
            input{
              width: 88px;
              height: 24px;
              outline: none;
              font-size: 24px;
              margin: 0 10px 0;
            }
          }
        }
        .pieces{
          li{
            margin: 20px 0 0 20px;
            float: left;
            background: #fff;
            color: #000;
            padding: 1px 7px;
            cursor: pointer;
            &.active{
              background: red;
            }
          }
        }
      }
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 694px;
      height: 512px;
      margin: 0 auto;
      background: linear-gradient(#c40101, #ff7c00); /* 标准的语法 */
      text-align: center;
      color: #fff;
    }
    .lottery_set1{
      position: absolute;
      bottom: 10px;
      left: 0;
      text-align: center;
      width: 100%;
      clear: both;
      line-height: 50px;
      color: #ff0;
      font-size: 20px;
      font-weight: normal;
      letter-spacing: 2px;
      span{
        padding: 10px 30px;
        background: #F0601C;
        cursor: pointer;
      }
      span:first-child{
        margin-right: 10px;
      }
    }
  }
</style>
