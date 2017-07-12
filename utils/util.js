
function getBackground(code){
  let bg 
  switch (code) {
    case '0': //晴
    case '1':
    case '2':
    case '3':
    case '38':
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg131jp03j30ku1dv3zv.jpg'
      break
    case  '5': //阴天
    case  '6':
    case  '7':
    case  '8':
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg13oovmvj30ku1dvabu.jpg'
      break
    case '4': //浓云
    case '9':
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg13oovmvj30ku1dvabu.jpg'
      break
    case '16': //闪电
    case '17':
    case '18':
    case '34':
    case '35':
    case '36':
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg13oovmvj30ku1dvabu.jpg'
      break
    case '23': //雪
    case '24':
    case '25':
    case '37':
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg150ry7dj30ku1dvn0t.jpg'
      break
    case '10': //雨
    case '11': 
    case '12': 
    case '13': 
    case '14': 
    case '15': 
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg150ry7dj30ku1dvn0t.jpg'
      break
    case '26':  //雾霾
    case '27':
    case '28':
    case '29':
    case '30':
    case '31':
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg16b52wwj30ku1dvjtp.jpg'
      break
    default: 
      bg = 'http://ww1.sinaimg.cn/large/005M7QYPly1fhg15ynb4tj30ku1dvgnc.jpg'
      break
  }
  return bg
}

function formatTime(timeStr){
  let time = new Date(timeStr).getTime()
  let now = Date.now()
  let str 
  if(now - time < 60*1000){
    str = '刚刚'
  }else if( now - time < 60*60*1000){
    str = parseInt((now-time)/(1000*60)) + '分钟前'
  }else if( now - time < 24*60*60*1000){
    str = parseInt((now-time)/(60*1000*60)) + '小时前'
  }else{
    str = parseInt((now-time)/(24*60*1000*60)) + '天前'
  }
  return str
}

function formatHour(timeStr){
  let targetDate = new Date(timeStr)
  let nowDate = new Date()
  let targetHour = targetDate.getHours()
  let nowHour = nowDate.getHours()
  let str

  if(nowHour == targetHour){
    str = '现在'
  }else {
    str = `${targetHour}点`
  }
  return str

}

module.exports = {
  getBackground,
  formatTime,
  formatHour
}