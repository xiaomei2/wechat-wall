// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    imgFiles: <any>[],
    indicatorDots: true,
    currentIndex: 0
  },
  handleBack() {
    wx.navigateBack({})
  },
  // 事件处理函数
  bindViewTap() {
    const fs = wx.getFileSystemManager();
    wx.chooseMedia({
      count: 9,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['original'],
      camera: 'back',
      success: (res) => {
        console.log(res)
        res.tempFiles.forEach((item, index) => {
          item.quality = 50;
          fs.getFileInfo({
            filePath: item.tempFilePath,
            success: r => {
              item.size =  Math.ceil(r.size / 1024);
            }
          })
          
          wx.getImageInfo({
            src: item.tempFilePath,
            success: r => {
              item.width = r.width;
              item.height = r.height;
              this.setData({
                imgFiles: res.tempFiles
              })
              this.compressImage(item, index)
            }
          })
        })
        //console.log(res.tempFiles.tempFilePath)
        //console.log(res.tempFiles.size)
      }
    })
  },
  compressImage(item: any, index: number) {
    const fs = wx.getFileSystemManager();
    wx.compressImage({
      src: item.tempFilePath, // 图片路径
      quality: item.quality, // 压缩质量
      success: r => {
        item.compressTempFilePath = r.tempFilePath
        fs.getFileInfo({
          filePath: item.compressTempFilePath,
          success: r => {
            item.compressSize =  Math.ceil(r.size / 1024) + '';
            this.setData({
              [`imgFiles[${index}]`]: item
            })
          }
        })
      }
    })
  },
  onLoad() {
  },
  onShareAppMessage() {
    let shareData = {
      title: '一个超好用的图片压缩工具，快来试下吧😊',
      path: 'pages/index/index',
      imageUrl: '../images/compress_share.png'
    };
    return shareData;
  },
  changeImage(event: any) {
    this.data.currentIndex = event.detail.current;
    this.setData({
      currentIndex: event.detail.current
    })
    console.log(event.detail.current)
    this.compressImage(this.data.imgFiles[event.detail.current], event.detail.current)
  },
  saveImage() {
    wx.showLoading({
      title: '保存中...'
    })
    let that = this; // 保存函数作用域
    for (let index = 0; index < this.data.imgFiles.length; index++) {
      const element = this.data.imgFiles[index];
      wx.saveImageToPhotosAlbum({
        filePath: element.compressTempFilePath,
        success(res) {
          if (res.errMsg === 'saveImageToPhotosAlbum:ok') {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        },
        fail(err) {
          if (err.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
            wx.showModal({
              title: '提示',
              content: '您之前拒绝了保存到相册的权限，请前往设置页面打开权限',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.openSetting({
                    success(settingData) {
                      if (settingData.authSetting['scope.writePhotosAlbum']) {
                        // 用户已经同意保存相册权限
                        // 重新执行保存逻辑
                        that.saveImage();
                      } else {
                        // 用户仍然拒绝授权
                        wx.showToast({
                          title: '您未开启保存到相册的权限',
                          icon: 'none',
                          duration: 2000
                        });
                      }
                    }
                  })
                }
              }
            })
          }
        },
        complete() {
          wx.hideLoading();
        }
      })
    }
  },
  sliderChange(e: any) {
    this.data.imgFiles[this.data.currentIndex].quality = e.detail.value
    this.compressImage(this.data.imgFiles[this.data.currentIndex], this.data.currentIndex)
  }
})
