import $ from 'jquery'
import jsonp from 'common/js/jsonp'
import { commonParams,options } from './config'
import  axios from 'axios'
//import cache from 'common/js/cache'
//获取轮播图数据
export function getRecommend(){
    //先配置url
    const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    //配置data
    const data=Object.assign({},commonParams,{
        //说明这个请求是来源与h5平台的
        platform:'h5',
        uin:0,
        needNewCode:1
    })
    return jsonp(url,data,options)
}
//获取歌单数据
// export function getDiscList() {
//   const url = "/api/getDiscList";
//   const data = Object.assign({}, commonParams, {
//       platform: 'yqq',
//       hostUin: 0,
//       sin: 0,
//       ein: 29,
//       sortId: 5,
//       needNewCode: 0,
//       categoryId: 10000000,
//       rnd: Math.random(),
//       format: 'json'
//     })
//     return axios.get(url, {
//       params: data
//     }).then((res) => {
//       return Promise.resolve(res.data)
//     })
//   }
