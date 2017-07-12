//app.js
App({
  onLaunch() {
    console.log('launch')
  },

  onShow(opth){
    console.log('show')
  },

  onHide(){
    console.log('hide')
  },
  onError(){
    console.log('error')
  },
  globalData: {
    weather: null,
    hourly: null
  }
})