<template>
    <div class="winners" v-if="flag">
      <div class="winners_wapper"></div>
      <div class="winners_bg">
        <div class="close_icon" @click="toggle">

        </div>
        <div class="winnners_title "></div>
        <div class="title winner1 css1704cfa8411f069">
          一等奖
        </div>
        <div class="list css1704cfa8411f069">
          <span >{{lotteryResult[8] ? lotteryResult[8] : '(未产生)'}}</span>
        </div>
        <div class="title winner1 css1704cfa8411f069">
          二等奖
        </div>
        <div class="list css1704cfa8411f069">
          <span >{{lotteryResult[5] ? lotteryResult[5] : '(未产生)'}}</span>
          <span >{{lotteryResult[6] ? lotteryResult[6] : '(未产生)'}}</span>
          <span >{{lotteryResult[7] ? lotteryResult[7] : '(未产生)'}}</span>
        </div>
        <div class="title winner1 css1704cfa8411f069">
          三等奖
        </div>
        <div class="list css1704cfa8411f069">
          <span >{{lotteryResult[0] ? lotteryResult[0] : '(未产生)'}}</span>
          <span >{{lotteryResult[1] ? lotteryResult[1] : '(未产生)'}}</span>
          <span >{{lotteryResult[2] ? lotteryResult[2] : '(未产生)'}}</span>
          <span >{{lotteryResult[3] ? lotteryResult[3] : '(未产生)'}}</span>
          <span >{{lotteryResult[4] ? lotteryResult[4] : '(未产生)'}}</span>
        </div>


      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'winners',
  data () {
    return {
      flag: false
    }
  },
  computed: {
    ...mapState([
      'lotteryResult'
    ])
  },
  methods: {
    toggle () {
      this.flag = !this.flag
    }
  },
  mounted () {
    console.log(this.$store.getters)
  }
}
</script>

<style lang="scss">
  .winners{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    .winners_wapper{
      width: 100%;
      height: 100%;
      background: #484848;
      opacity: .63;
    }
    .winners_bg{

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
      .winnners_title{
        width: 329px;
        height: 80px;
        margin: 30px auto 0;
        background:url('../assets/img/winnners_title.png')  no-repeat;
        background-size: 100% 100%;
      }
      .title{
        font-size: 35px;
        line-height: 70px;
      }
      .list{
        font-size: 31px;
        font-weight: normal;
        margin-bottom: 16px;
        &:first-child{
          margin-bottom: 26px;
        }
        span{
          margin: 0 10px;
        }
      }

    }
  }
</style>
