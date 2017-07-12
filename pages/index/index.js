let API = require('../../utils/api')
let Util = require('../../utils/util') 
let app = getApp()

Page({

  data: {
  },

  onUpper(e){
    console.log('upper')
  },


  onShow () {
    console.log('show')
  },

  onLoad (options){
    var _this = this
    console.log('load')

    API.getLocation()
      .then(API.getCityId)
      .then((cityid)=>{
        API.getNowWeather(cityid)
          .then((weather)=>{
            weather.format_last_update = Util.formatTime(weather.last_update)
            weather.bg = Util.getBackground(weather.now.code)
            _this.setData({weather})
            app.globalData.weather = weather
          }).catch(_this.onError)

        API.get24hWeather(cityid)
          .then((hourly)=>{
            hourly.forEach((hour)=>{
              hour.img = `../../images/weather/${hour.code}.png`
              hour.format_time = Util.formatHour(hour.time)
            })
            _this.setData({hourly})
            app.globalData.hourly = hourly
          }).catch(_this.onError)
      }).catch(_this.onError)
  },

  onError(err){
    wx.showToast({
      title: err.msg,
      duration: 2000
    })
  }


})