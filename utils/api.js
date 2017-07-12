

function getNowWeather(cityid){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: 'https://weixin.jirengu.com/weather/now',
      data: {
        cityid
      },
      success (res) {
        if(res.data && res.data.status && res.data.status === 'OK' && res.data.weather[0]){
          resolve(res.data.weather[0])
        }else {
          reject({status: 'error', msg: '获取天气失败'})
        }
      },
      fail (){
        reject({status: 'error', msg: '获取天气失败'})
      }
    })
  })
}

function get24hWeather(cityid){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: 'https://weixin.jirengu.com/weather/future24h',
      data: {
        cityid
      },
      success (res) {
        if(res.data&& res.data.status && res.data.status==='OK'&& res.data.hourly){
          resolve(res.data.hourly)
        }else{
          reject({status: 'error', msg: '获取当天24小时天气失败'})
        }
        
      },
      fail (){
        reject({status: 'error', msg: '获取当天24小时天气失败'})
      }
    })
  })
}

function getCityId(location){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: 'https://weixin.jirengu.com/weather/cityid',
      data: {
        location
      },
      success (res) {
        if(res.data && res.data.results && res.data.results.length > 0){
          resolve(res.data.results[0]['id'])
        }else{
          reject({status: 'error', msg: '获取城市 id 失败'})
        }
        
      },
      fail (){
        reject({status: 'error', msg: '获取城市 id 失败'})
      }
    })
  }) 
}

function getLocation(){
  return new Promise((resolve, reject)=>{
     wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        resolve(res.latitude + ':' + res.longitude)
      },
      fail (){
        resolve('')
      }
    }) 
  })
}

module.exports = {
  getNowWeather,
  get24hWeather,
  getCityId,
  getLocation
}