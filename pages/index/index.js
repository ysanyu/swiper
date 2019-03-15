//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击进入主页'
  },
  getToHome: function(){
    wx.navigateTo({
      url: '../home/home'
    })
  }
})
