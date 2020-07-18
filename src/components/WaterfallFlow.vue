<template>
  <div>
    <div>
      <el-button size="mini" @click="toCommon">Common Demo</el-button>
      <el-button size="mini" @click="loadMore">Load More</el-button>
      <el-button size="mini" @click="switchCol(5)">5 Column</el-button>
      <el-button size="mini" @click="switchCol(8)">8 Column</el-button>
      <el-button size="mini" @click="switchCol(10)">10 Column</el-button>
      <el-button size="mini" @click="reset">Reset</el-button>
    </div>
    <div  class="container-water-fall">
      <div>
        <waterfall :col='col' :data="data" @loadmore="loadMore" @scroll="scroll" @finish="finish" :lazyDistance="300">
          <template>
            <div class="cell-item" v-for="(item,index) in data" :key="index"  >
              <img v-if="item.imgUrl" :src="item.imgUrl" alt="加载错误"  />
              <div class="item-body">
                <div class="item-desc">{{item.title}}</div>
                <div class="item-footer">
                  <div v-if="item.avatar" class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                  <div class="name">{{item.user}}</div>
                  <div class="like" :class="item.liked?'active':''" >
                    <i ></i>
                    <div class="like-total">{{item.like}}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
        <loading :show="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import loading from './loading'
export default {
  name: 'WaterfallFlow',
  components: {
    loading
  },
  data () {
    return {
      /** 列数 */
      col: 5,
      /** 页面展示的数据 */
      data: [],
      loading: false,
      originData: [{
        imgUrl: require('../assets/WaterfallFlow/480x680.jpg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: true,
        like: '953'
      }, {
        imgUrl: require('../assets/WaterfallFlow/490x553.jpg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: false,
        like: '953'
      }, {
        imgUrl: require('../assets/WaterfallFlow/600x400.jpg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: false,
        like: '953'
      }, {
        imgUrl: require('../assets/WaterfallFlow/600x584.jpeg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: false,
        like: '953'
      }, {
        imgUrl: require('../assets/WaterfallFlow/660x590.jpg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: false,
        like: '953'
      }, {
        imgUrl: require('../assets/WaterfallFlow/690x460.jpg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: false,
        like: '953'
      }, {
        imgUrl: require('../assets/WaterfallFlow/700x713.jpg'),
        avatar: require('../assets/WaterfallFlow/avatar.jpg'),
        title: '最近浴室新宠，日系神仙好物了解一下～',
        user: 'www',
        liked: false,
        like: '953'
      }]
    }
  },
  mounted () {
    this.data = this.originData
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        this.data = this.data.concat(this.originData, this.originData)
        this.loading = false
      }, 1000)
    },
    scroll (data) {
      console.log('scroll')
    },
    finish () {
      console.log('finish')
    },
    switchCol (col) {
      this.col = parseInt(col)
    },
    reset () {
      this.data = []
    },
    toCommon () {
      this.data = this.originData
      this.col = 5
    }
  }
}
</script>
<style  lang="less" scoped>
  *{
    margin: 0;
  }
  .container-water-fall{
    // padding: 0 28px;
    width: 100vw;
    box-sizing:border-box;
    h4{
      padding-top: 56px;
      padding-bottom:28px;
      font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #000000;
      letter-spacing: 1px;
      text-align: justify;
    }
    button{
      background-color: #ff0;
      color: #24292e;
      border: 1px solid rgba(27,31,35,.2);
      border-radius: .25em;
      width: 100px;
      line-height: 26px;
      font-size: 13px;
      margin: 4px 0;
      margin-right: 4px;
      cursor: pointer;
      outline: none;
      &.blue-light{
        background: #27fbc2;
      }
    }
    button:hover{
      background-image: linear-gradient(-180deg,#fafbfc,#ccc 90%);
    }

    .cell-item{
      width: 100%;
      margin-bottom: 10px;
      background: #ffffff;
      border: 2px solid #F0F0F0;
      border-radius: 12px 12px 12px 12px;
      overflow: hidden;
      box-sizing:border-box;
      img{
        // border-radius: 12px 12px 0 0;
        width: 100%;
        height: auto;
        display: block;
      }
      .item-body{
        // border: 1px solid #F0F0F0;
        padding: 12px;
        .item-desc{
          font-size: 15px;
          color: #333333;
          line-height: 15px;
          font-weight: bold;
        }
        .item-footer{
          margin-top: 22px;
          position: relative;
          display: flex;
          align-items: center;
          .avatar{
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: contain;
          }
          .name{
            max-width: 150px;
            margin-left: 10px;
            font-size: 14px;
            color: #999999;
          }
          .like{
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            &.active{
              i{
              }
              .like-total{
                color:#FF4479;
              }
            }
            i{
              width: 28px;
              display: block;

            }
            .like-total{
              margin-left: 10px;
              font-size: 12px;
              color: #999999;
            }
          }

        }
      }
    }
  }
  .githubdata{
    float: right;
    margin-right: 90px;
    img{
      width: 14px;
      // height: 16px;
    }
  }
</style>
