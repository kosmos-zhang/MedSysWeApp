var initData = 'this is first line\nthis is second line'
Page({
  data: {
    text: initData,
    input_type: 0,
    input_wrp_style: "flex-direction:row; ",
    scan_wrp_style: "flex-direction:row; display:none;",
  },
  onshow: function() {
    var appInstance = getApp()
    console.log(appInstance.globalData)
  },
  showinput: function(e) {
    if (this.data.input_type == 0) {
        this.setData({
            input_wrp_style : "flex-direction:row; display:none;",
            scan_wrp_style : "flex-direction:row; ",
            input_type: 1,
        })
    }
    else {
        this.setData({
            input_wrp_style: "flex-direction:row; ",
            scan_wrp_style: "flex-direction:row; display:none;",
            input_type: 0,
        })
    }
  },
  scanbarcode: function(e) {
    wx.scanCode({
      success: (res) => {
        // verify the res code
      }
    })
  },
  drugreact: function(e) {
  },
  drugdesc: function(e) {
  },
  drugremind: function(e) {
  },
  drugdel: function(e) {
  },
})