<template>
  <div class="game">
    <div class="content">
      <div class="game_title"></div>
      <div class="game_name css173d7efab11f069" @click="tabChange">{{gameObj[tab]}}</div>
      <div class="content">
        <template v-if="tab === 0">
          <div class="game_group">
            <p class="group_name">第一组</p>
            <ul class="group">
              <li class="group_number">{{gameList1[0] ? gameList1[0].name : ''}}</li>
              <li class="group_number">{{gameList1[1] ? gameList1[1].name : ''}}</li>
              <li class="group_number">{{gameList1[2] ? gameList1[2].name : ''}}</li>
            </ul>
          </div>
          <div class="game_group">
            <p class="group_name">第二组</p>
            <ul class="group">
              <li class="group_number">{{gameList1[3] ? gameList1[3].name : ''}}</li>
              <li class="group_number">{{gameList1[4] ? gameList1[4].name : ''}}</li>
              <li class="group_number">{{gameList1[5] ? gameList1[5].name : ''}}</li>
            </ul>
          </div>
          <div class="game_group">
            <p class="group_name">第三组</p>
            <ul class="group">
              <li class="group_number">{{gameList1[6] ? gameList1[6].name : ''}}</li>
              <li class="group_number">{{gameList1[7] ? gameList1[7].name : ''}}</li>
              <li class="group_number">{{gameList1[8] ? gameList1[8].name : ''}}</li>
            </ul>
          </div>
        </template>
        <template v-if="tab === 1">
          <div class="game_group w50">
            <p class="group_name">第一组</p>
            <ul class="group">
              <li class="group_number w50">{{gameList2[0] ? gameList2[0].name : ''}}</li>
              <li class="group_number w50">{{gameList2[1] ? gameList2[1].name : ''}}</li>
              <li class="group_number w50">{{gameList2[2] ? gameList2[2].name : ''}}</li>
              <li class="group_number w50">{{gameList2[3] ? gameList2[3].name : ''}}</li>
              <li class="group_number w50">{{gameList2[4] ? gameList2[4].name : ''}}</li>
              <li class="group_number w50">{{gameList2[5] ? gameList2[5].name : ''}}</li>
              <li class="group_number w50">{{gameList2[6] ? gameList2[6].name : ''}}</li>
              <li class="group_number w50">{{gameList2[7] ? gameList2[7].name : ''}}</li>
            </ul>
          </div>
          <div class="game_group w50">
            <p class="group_name">第二组</p>
            <ul class="group">
              <li class="group_number w50">{{gameList2[8] ? gameList2[8].name : ''}}</li>
              <li class="group_number w50">{{gameList2[9] ? gameList2[9].name : ''}}</li>
              <li class="group_number w50">{{gameList2[10] ? gameList2[10].name : ''}}</li>
              <li class="group_number w50">{{gameList2[11] ? gameList2[11].name : ''}}</li>
              <li class="group_number w50">{{gameList2[12] ? gameList2[12].name : ''}}</li>
              <li class="group_number w50">{{gameList2[13] ? gameList2[13].name : ''}}</li>
              <li class="group_number w50">{{gameList2[14] ? gameList2[14].name : ''}}</li>
              <li class="group_number w50">{{gameList2[15] ? gameList2[15].name : ''}}</li>
            </ul>
          </div>
        </template>
        <template v-if="tab === 2">
          <div class="game_group w50">
            <p class="group_name">第一组</p>
            <ul class="group">
              <li class="group_number w50">{{gameList3[0] ? gameList3[0].name : ''}}</li>
              <li class="group_number w50">{{gameList3[1] ? gameList3[1].name : ''}}</li>
              <li class="group_number w50">{{gameList3[2] ? gameList3[2].name : ''}}</li>
              <li class="group_number w50">{{gameList3[3] ? gameList3[3].name : ''}}</li>
              <li class="group_number w50">{{gameList3[4] ? gameList3[4].name : ''}}</li>

            </ul>
          </div>
          <div class="game_group w50">
            <p class="group_name">第二组</p>
            <ul class="group">
              <li class="group_number w50">{{gameList3[5] ? gameList3[5].name : ''}}</li>
              <li class="group_number w50">{{gameList3[6] ? gameList3[6].name : ''}}</li>
              <li class="group_number w50">{{gameList3[7] ? gameList3[7].name : ''}}</li>
              <li class="group_number w50">{{gameList3[8] ? gameList3[8].name : ''}}</li>
              <li class="group_number w50">{{gameList3[9] ? gameList3[9].name : ''}}</li>
            </ul>
          </div>
        </template>

      </div>
      <div class="footer">
        <div class="run_btn css173d7efab11f069" @click="run(buttonName)">{{buttonName}}</div>
        <div class="set_btn css173ca4fb8e1f069" @click="toggle(true)">[ 设置 ]</div>
      </div>
    </div>



    <div class="settings" v-if="flag">
      <div class="settings_wapper"></div>
      <div class="settings_bg">
        <div class="close_icon" @click="toggle"></div>
        <div class="title">全员名单</div>

        <div class="content">
          <ul class="pieces">
            <li v-for="(item,idx) in groupListClone" :key="idx" :class="{'active': item.selected}"  @click="toggleResult(item)">{{item.name}}</li>
          </ul>
        </div>

        <div class="lottery_set1 css1704cfa8411f069">
          <span @click="HandleOkClick">确定</span>
          <span @click="toggle">取消</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      groupList: [
        { name: '丁志刚' },
        { name: '庄德健' },
        { name: '王一辉' },
        { name: '梅哲' },
        { name: '彭婷' },
        { name: '莫俊锋' },
        { name: '王恒' },
        { name: '秦园园' },
        { name: '蔡文婷' },
        { name: '邵丽芳' },
        { name: '董洪光' },
        { name: '徐炜' },
        { name: '杨来垚' },
        { name: '朱阳' },
        { name: '费玉琳' },
        { name: '骆颖' },
        { name: '孙显勇' },
        { name: '贾来刚' },
        { name: '张彦礼' },
        { name: '蒋慧芳' },
        { name: '方桦' },
        { name: '向昌学' },
        { name: '张俊茁' },
        { name: '盛一林' },
        { name: '毛世桥' },
        { name: '费余波' },
        { name: '荣力' },
        { name: '金凤' },
        { name: '刘全全' },
        { name: '张广宇' },
        { name: '万焕昌' },
        { name: '曾威' },
        { name: '吴伦飞' },
        { name: '王和' },
        { name: '冯书亭' },
        { name: '项园园' },
        { name: '徐跃科' },
        { name: '胡雨' },
        { name: '周德圣' },
        { name: '史文强' },
        { name: '张蓉' },
        { name: '刘笑笑' },
        { name: '陈潇慧' },
        { name: '陈茜' },
        { name: '朱嘉俊' }
      ],
      groupListClone: [],
      selectedList: [

      ],
      gameList1: [],
      gameList2: [],
      gameList3: [],
      runStatus: 0,
      buttonName: '开始滚动',
      timer: null,
      gameObj: { 0: '金猪下崽', 1: '眉目传情', 2: '我想和你唱' },
      tab: 0,
      flag: false
    }
  },
  methods: {
    toggleResult (item) {
      this.$set(item, 'selected', !item.selected)
    },
    HandleOkClick () {
      this.groupList = JSON.parse(JSON.stringify(this.groupListClone))
      this.toggle()
    },
    toggle (mark) {
      if (mark) {
        this.groupListClone = JSON.parse(JSON.stringify(this.groupList))
      }
      this.flag = !this.flag
    },
    tabChange () {
      if (this.tab === 2) {
        this.tab = 0
      } else {
        this.tab++
      }
      this.gameList = [];
    },
    run (btn) {
      if (!this.groupList.filter(it => !it.selected).length) {
        return
      }
      let num
      if (this.tab === 0) {
        num = 9
      } else if (this.tab === 1) {
        num = 16
      } else if (this.tab === 2) {
        num = 10
      }
      if (num > this.groupList.filter(it => !it.selected).length) {
        num = this.groupList.filter(it => !it.selected).length
      }
      if (btn === '开始滚动') {
        this.buttonName = '停'
        this.runStatus = 1
        this.timer = setTimeout(() => {
          const arr = this.groupList.filter(it => !it.selected)
          if (this.tab === 0) {
            this.gameList1 = this.getRandomArrayElements(arr, num)
          } else if (this.tab === 1) {
            this.gameList2 = this.getRandomArrayElements(arr, num)
          } else if (this.tab === 2) {
            this.gameList3 = this.getRandomArrayElements(arr, num)
          }
          if (this.runStatus === 1) {
            this.run('开始滚动')
          }
        }, 50)
      } else {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        const arr = this.groupList.filter(it => !it.selected)
        if (this.tab === 0) {
          this.gameList1 = this.getRandomArrayElements(arr, num, true)
        } else if (this.tab === 1) {
          this.gameList2 = this.getRandomArrayElements(arr, num, true)
        } else if (this.tab === 2) {
          this.gameList3 = this.getRandomArrayElements(arr, num, true)
        }
        this.runStatus = 0
        this.buttonName = '开始滚动'
        // this.$store.commit('addResult', this.lotteryNum)
      }
    },
    getRandomArrayElements (arr, count, effect) {
      if (arr.length === count && effect) {
        arr.forEach(it => {
          this.$set(it, 'selected', true)
        })
        return JSON.parse(JSON.stringify(arr))
      }
      if (arr.length < count) {
        count = arr.length
      }
      var shuffled = JSON.parse(JSON.stringify(arr)).slice(0), i = arr.length, min = i - count, temp, index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random())
        if (arr[index].selected) {
          i++
        } else {
          temp = shuffled[index]
          shuffled[index] = shuffled[i]
          shuffled[i] = temp
          if (effect) {
            this.$set(arr[index], 'selected', true)
            // arr[index].selected = true
          }
        }

        // console.log(this.groupList[index].name)
      }
      return shuffled.slice(min)
      // for()
    }
  }
}
</script>

<style lang="scss">
.game{
  position: fixed;
  width: 1280px;
  height: 512px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background:url('../../assets/img/game_bg.png')  no-repeat;
  background-size: 100% 100%;
  .content{
    width: 646px;
    height: 512px;
    margin: 10px auto 0;
    .game_title{
      margin: 11px auto 0;
      width: 252px;
      height: 73px;
      background:url('../../assets/img/game_title.png')  no-repeat;
      background-size: 100% 100%;
    }
    .game_name{
      width: 410px;
      color: #bd1322;
      cursor: pointer;
      font-size: 42px;
      height: 88px;
      line-height: 78px;
      margin: 8px auto 0;
      background:url('../../assets/img/game_name.png')  no-repeat;
      background-size: 100% 100%;
    }
    .content{
      overflow: hidden;
      width: 100%;
      height: 245px;
      .game_group{
        float: left;
        width: 33.3%;
        &.w50{
          width: 50%;
        }
        .group_name{
          font-family:'SourceHanSerif-173ca4fb8e1f069';
          font-size: 36px;
          color: #fff;
          margin: 0;
        }
        .group{
          list-style: none;
          margin: 0;
          padding: 0;
          li{
            font-family:'SourceHan-S-SC173c9853c41f069';
            font-size: 28px;
            line-height: 48px;
            color: #fff;
            overflow: hidden;
            &.w50{
              width: 50%;
              float: left;
            }
          }
        }
      }
    }
    .footer{

      position: relative;
      .run_btn{
        margin: 0 auto;
        background: linear-gradient(#dd1500, #e85800);
        width: 173px;
        height: 51px;
        border: 1px solid #ceb800;
        color: #ffe400;
        font-size: 30px;
        line-height: 51px;
        cursor: pointer;
      }
      .set_btn{
        position: absolute;
        left: 420px;
        bottom: 10px;
        cursor: pointer;
        color: #ffe400;
      }
    }
  }

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
        background: url("../../assets/img/close_icon.png") no-repeat;
        background-size: 100% 100%;
      }
      .title{
        line-height: 50px;
        font-size: 26px;
        text-align: left;
        font-weight: normal;
        margin-top:20px;
        padding-left: 40px;
        span{
          margin: 0 20px;
          cursor: pointer;
          &.active{
            color: yellow;
          }
        }
      }
      .content{
        width: 100%;
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
      width: 900px;
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
}
</style>
