# swiper
一个简单的swiper小程序

## 使用小程序的swiper组件
``
<swiper
    indicator-dots="{{indicatorDots}}"
    autoplay="{{autoplay}}"
    interval="{{interval}}"
    duration="{{duration}}"
    current="{{current}}"
    bindchange='swiperChange'
    class="swiper"
  >
    <block wx:for="{{imgUrls}}" wx:key="*this">
      <swiper-item>
        <image src="{{item}}" class="swiper-image"></image>
      </swiper-item>
    </block>
  </swiper>
``
* 具体可以参见小程序组件使用：https://developers.weixin.qq.com/miniprogram/dev/component/


