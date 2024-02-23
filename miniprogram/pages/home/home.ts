const app = getApp()

Page({
data :{
  swipers: ["https://xyq-1324178530.cos.ap-guangzhou.myqcloud.com/wallhaven-exrqrr_2345x2251.png"],
  unpickedCount: 0
},
handleNav(e: WechatMiniprogram.CustomEvent) {
  let type = e.currentTarget.dataset.type
  let path='';
  switch(type){
    case 'favorites':
      path ='/pages/home/ocr/ocr';
      break;
      case 'historys':
      path ='/pages/home/parcel/index';
  }
  wx.navigateTo({
    url: path
  })
 
},
onShow(){
  this.setData({
    unpickedCount :10 
  })
},

});