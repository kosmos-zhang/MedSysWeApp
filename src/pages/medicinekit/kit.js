var initData = 'this is first line\nthis is second line'
Page({
  data: {
    text: initData,
    medinines: ["阿司匹林", "头孢克洛"],
  },
  onshow: function() {
    var appInstance = getApp()
    console.log(appInstance.globalData)
  },
  scanbarcode: function(e) {
    wx.scanCode({
      success: (res) => {
        this.data.medinines = this.data.medinines.concat([res.result])
        this.setData({
          medinines: this.data.medinines
        })
      }
    })
  },
})