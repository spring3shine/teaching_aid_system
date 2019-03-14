//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    log: 116.46,
    lat: 39.92,
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]

  },
  
  onLoad: function () {
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          log:res.longitude,
          lat:res.latitude
        })
      },
    })
  },

  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  primary: function(e){
    console.log(this)
    console.log(this.data.log)
    console.log(this.data.lat)
    console.log("userInfo,userPosition")
  },

  checkInList: function (e) {
    wx.navigateTo({
      url: '/pages/checkInList/checkInList',
    })
  }
})
