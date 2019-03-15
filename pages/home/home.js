
Page({
  data: {
    names: [
      {
        id: 0,
        name: '肖途'
      },
      {
        id: 1,
        name: '方敏'
      },
      {
        id: 2,
        name: '庄晓曼'
      },
      {
        id: 3,
        name: '陆望舒'
      },
      {
        id: 4,
        name: '武藤纯子'
      }
    ],
    imgUrls: [
      'http://po700mnv8.bkt.clouddn.com/xt.jpg',
      'http://po700mnv8.bkt.clouddn.com/fm.jpg',
      'http://po700mnv8.bkt.clouddn.com/zxm.jpg',
      'http://po700mnv8.bkt.clouddn.com/lws.jpg',
      'http://po700mnv8.bkt.clouddn.com/wtcz.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    current: 0 // 默认第一张为0
  },

  // swiper切换时触发swiperChange（）
  swiperChange: function(e){
    this.setData({
      current: e.detail.current
    })
  },
  
  // 点击对应的name跳转到对应的图片
  changeImg: function(e){
    let index = e.target.id;
    this.setData({
      current: index,
      autoplay: false
    })
  }
})
