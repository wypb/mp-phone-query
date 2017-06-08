App({
  /**
   * 获取手机归属地信息
   */
  getPhoneInfo(phoneNum, callback) {
    wx.request({
      url:
      'https://www.iteblog.com/api/mobile.php?mobile=' + phoneNum,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        callback(res.data);
      }
    })
  }
})