//index.js
//获取应用实例

Page({
  data: {
    
  results:{}
    
  },

  onShow: function () {
   
  },

  onLoad: function () {
 
    
      var that = this;
      wx.request({
        url: 'http://127.0.0.1:8082/web-server/wxSuyuan/query.json?action=query',//自己请求的服务器的地址
        method: 'post',
        header: {
          'content-type': 'application/json' // 默认值
          //  'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (req) {
          debugger
          var list = req.data.wxData;
          
          console.log(list);
          if (list == null) {
            wx.showToast({
              title: '网络连接异常',
              icon: 'false',   //图标
              duration: 1500  //提示的延迟的时间
            })
          } else {
            
            that.setData({
              results: list
              
              
            })
          }
        }
      })
  },

  map: function () {
    wxb.that = this;
    wx.chooseLocation({
      success: function (data) {
        wxb.that.setData({
          lat: data.latitude,
          lng: data.longitude,
          addr: data.address,
        })
      }
    });
  },



  selecareas: function (e) {
    wxb.that.setData({
      area_index: e.detail.value,
      area_id: wxb.that.data.areas[e.detail.value].area_id,
    });
  },

 
})
