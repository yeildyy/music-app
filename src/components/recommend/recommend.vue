<template>
  <div class="recommend" >
      <scroll class="recommend-content" >
        <div>
        <div v-if="recommends.length"  class="slider-wrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl"/>
              </a>
            </div>
          </slider>
        </div>
            <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li v-for="item in discList" class="item">
                <div class="icon">
                  <img width="60" height="60" :src="item.imgurl"/>
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
         </div>
        </div>
      </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import {getRecommend,getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'  
import axios from 'axios'                                             
export default{
  name:'discLlist',
  data(){
    return{
      recommends:[],
      discList:[]
    }
  },
  created(){
    //在这个钩子中调用这个函数
    //调用轮播图
    this._getRecommend()
    //调用歌单列表
     this.$axios.get('api/fcj/rank/topList').then((res)=>{
        console.log("niaho1")
        this.discList=res.data.topList
        console.log(this.discList)
      })
    },
  methods:{
    _getRecommend(){
      getRecommend().then((res)=>{
       if(res.code===ERR_OK){
         //在这里取到了轮播图的数据，为了和dom相关，需要在上面添加一个data
         //console.log(res.data.slider);
         this.recommends=res.data.slider
       }
      })
    }
  },
  components:{
    Slider,
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>