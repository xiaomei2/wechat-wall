
Page({
data :{
  swipers: ["https://xyq-1324178530.cos.ap-guangzhou.myqcloud.com/wallhaven-exrqrr_2345x2251.png"],
  unpickedCount: 0,
  files:[],//图片信息
},
//上传图片，选择图片
chooseImage: function(e) {
  var that = this;
  wx.chooseImage({
    count: 9, // 最多选择9张照片
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function(res) {
      const tempFilePaths = res.tempFilePaths;
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      // that.files = that.files.concat(res.tempFilePaths);
      wx.showLoading({
        title: '正在上传...',
        icon: 'loading',
        // mask: true,
        duration: 10000
      });
      //循环实现多张图片一起上传
      for (var i = 0; i < tempFilePaths.length;i++){
        var filePath = tempFilePaths[i];
        wx.uploadFile({
        //这里把图片上传地址写上真实的
           url: 'https://localhost:1234/api/WorkOrder/UploadFiles',
          filePath: filePath,
          name: 'files',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          success(res) {
          //上传成功后，返回的线上图片地址渲染图片列表
            const data = JSON.parse(res.data);
            console.log(data,'data');
          },
          complete:()=>{
            wx.hideLoading()
          }
        });
      }
    }
  });
},

handleNav(e: WechatMiniprogram.CustomEvent) {
  let type = e.currentTarget.dataset.type
  let path='';
  switch(type){
    case 'favorites':
      path ='/pages/main/index';
      break;
      case 'historys':
        wx.showToast({
          title: `更多内容,敬请期待`,
          icon: 'none',
        });
        break;
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