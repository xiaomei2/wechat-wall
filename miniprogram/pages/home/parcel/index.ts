// pages/home/parcel/index.ts

Page({
  data: {
    active: 0,
  },
 
  handleBack() {
    wx.navigateBack({})
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  onLoad: function (options) {
    const list = {
      // 表格标题
      th: ["id", "时间","快递公司","取件码","status"],
      // 表格内容  这里只能使用 数组套数组格式
      td: [
        [
          '1',
          "0124",
          "圆通快递",
          "a-1-a",
          '1'
        ],
        [
          '2',
          "0124",
          "韵达快递",
          "a-1-a",
          '0'
        ],
        [
          '3',
          "0124",
          "邮政快递",
          "a-1-a",
          '0'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '4',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ],
        [
          '18',
          "0124",
          "极兔快递",
          "a-1-a",
          '1'
        ]
      ]
    };
    this.setData({
      list: list
    });
  },
})