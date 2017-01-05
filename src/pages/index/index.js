//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用全民药箱',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          });
          wx.navigateTo({
            url: '../medicinekit/kit'
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
