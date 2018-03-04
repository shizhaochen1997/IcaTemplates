//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');

Page({
  data: {
    weekIndex : 0, //选择器所选的元素
    weekList: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周','第八周','第九周','第十周','第十一周','第十二周','第十三周','第十四周','第十五周','第十六周'],  //选择器的所有选项

    classList1: [
      { "date": 1, "startNumber": 1, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color":  "#85B8CF" },
      { "date": 1, "startNumber": 3, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 2, "startNumber": 3, "duration": 2, "subject": "移动互联网@3-435", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#0A9A84" },
      { "date": 4, "startNumber": 1, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 4, "startNumber": 3, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
    ],  

    classList2: [
      { "date": 1, "startNumber": 1, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
      { "date": 1, "startNumber": 3, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 1, "startNumber": 5, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 1, "startNumber": 7, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 2, "startNumber": 1, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 2, "startNumber": 3, "duration": 2, "subject": "移动互联网@3-435", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#0A9A84" },
      { "date": 2, "startNumber": 7, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 3, "startNumber": 1, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 3, "startNumber": 3, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 4, "startNumber": 1, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 4, "startNumber": 3, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF"},
      { "date": 4, "startNumber": 5, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 4, "startNumber": 7, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 5, "startNumber": 1, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 5, "startNumber": 5, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
    ],

    classList3: [
      { "date": 1, "startNumber": 1, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF"},
      { "date": 1, "startNumber": 3, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 1, "startNumber": 7, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 2, "startNumber": 1, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 2, "startNumber": 3, "duration": 2, "subject": "移动互联网@3-435", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#0A9A84" },
      { "date": 3, "startNumber": 3, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 4, "startNumber": 1, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 4, "startNumber": 3, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
      { "date": 4, "startNumber": 7, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 5, "startNumber": 5, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
    ],

    classList7: [
      { "date": 1, "startNumber": 1, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
      { "date": 1, "startNumber": 3, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 1, "startNumber": 5, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 1, "startNumber": 7, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 2, "startNumber": 1, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 2, "startNumber": 3, "duration": 2, "subject": "移动互联网@3-435", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#0A9A84" },
      { "date": 2, "startNumber": 7, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 3, "startNumber": 1, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 3, "startNumber": 3, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 4, "startNumber": 1, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 4, "startNumber": 3, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
      { "date": 4, "startNumber": 5, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 4, "startNumber": 7, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
      { "date": 5, "startNumber": 1, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A"},
      { "date": 5, "startNumber": 5, "duration": 2, "subject": "3D设计@3-437", "weekNumber": [3, 5, 7, 12], "color": "#12AEF3" },
    ],

    classList8: [
      { "date": 1, "startNumber": 1, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF"},
      { "date": 1, "startNumber": 3, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 1, "startNumber": 7, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 2, "startNumber": 1, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 2, "startNumber": 3, "duration": 2, "subject": "移动互联网@3-435", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#0A9A84"},
      { "date": 3, "startNumber": 3, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 4, "startNumber": 1, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652"},
      { "date": 4, "startNumber": 3, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF"},
      { "date": 4, "startNumber": 7, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
      { "date": 5, "startNumber": 5, "duration": 2, "subject": "软件工程@3-437", "weekNumber": [2, 8, 11, 14], "color": "#FC9F9D" },
    ],

    classList10: [
      { "date": 1, "startNumber": 1, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
      { "date": 1, "startNumber": 3, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652"},
      { "date": 1, "startNumber": 5, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A"},
      { "date": 2, "startNumber": 3, "duration": 2, "subject": "移动互联网@3-435", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#0A9A84" },
      { "date": 2, "startNumber": 7, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 3, "startNumber": 1, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 4, "startNumber": 1, "duration": 2, "subject": "通原@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#90C652" },
      { "date": 4, "startNumber": 3, "duration": 2, "subject": "互联网应用@3-437", "weekNumber": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "color": "#85B8CF" },
      { "date": 4, "startNumber": 5, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A" },
      { "date": 5, "startNumber": 1, "duration": 2, "subject": "数字广播@3-437", "weekNumber": [2, 7, 10, 14], "color": "#D8AA5A"},
    ],
  },

  onLoad: function () {
    console.log('二班onLoad');
    var time = util.formatTime(new Date());
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    console.log('运行时间', Date());
    if (hour < 8 ) { hour = 0, minute = 0 }
    else if (hour == 8 || hour == 9 || hour == 10 || hour == 11 ) { hour = hour - 8}
    else if (hour == 12 ) {hour = 4, minute = 0}
    else if (hour == 13 && minute <= 30 ) { hour = 4, minute = 0}
    else if (hour == 13 && minute > 30 ) { hour = 4, minute = minute - 30 }
    else if (hour == 14 && minute <= 30 ) { hour = 4, minute = minute + 30}
    else if (hour == 14 && minute > 30 ) { hour = 5, minute = minute -30}
    else if (hour == 15 && minute <= 30 ) { hour = 5, minute = minute +30}
    else if (hour == 15 && minute > 30) { hour = 6, minute = minute - 30 }
    else if (hour == 16 && minute <= 30) { hour = 6, minute = minute + 30 }
    else if (hour == 16 && minute > 30) { hour = 7, minute = minute - 30 }
    else if (hour == 17 && minute <= 30) { hour = 7, minute = minute + 30 }
    else if (hour == 17 && minute > 30) { hour = 8, minute = minute - 30 }
    else if (hour == 18 && minute <= 30) { hour = 8, minute = minute + 30 }
    else if (hour == 18 && minute > 30) { hour = 9, minute = minute - 30 }
    else if (hour == 19 && minute <= 30) { hour = 9, minute = minute + 30 }
    else if (hour == 19 && minute > 30) { hour = 10, minute = minute - 30 }
    else if (hour == 20 && minute <= 30) { hour = 10, minute = minute + 30 }
    else if (hour == 20 && minute > 30) {hour = 11, minute = 0}
    else {hour = 11, minute = 0}
    this.setData({
      hour: hour,
      minute: minute
    });
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var weekNow;
    if (month == 3 && day > 4 && day < 12) { console.log('第一周'); weekNow = 0 }
    else if (month == 3 && day > 11 && day < 19) { console.log('第二周'); weekNow = 1 }
    else if (month == 3 && day > 18 && day < 26) { console.log('第三周'); weekNow = 2 }
    else if (month == 3 && day > 25 && day < 32) { console.log('第四周'); weekNow = 3 }
    else if (month == 4 && day == 1) { console.log('第四周'); weekNow = 3 }
    else if (month == 4 && day > 1 && day < 9) { console.log('第五周'); weekNow = 4 }
    else if (month == 4 && day > 8 && day < 16) { console.log('第六周'); weekNow = 5 }
    else if (month == 4 && day > 15 && day < 23) { console.log('第七周'); weekNow = 6 }
    else if (month == 4 && day > 22 && day < 30) { console.log('第八周'); weekNow = 7 }
    else if (month == 4 && day == 30) { console.log('第九周'); weekNow = 8 }
    else if (month == 5 && day > 0 && day < 7) { console.log('第九周'); weekNow = 8 }
    else if (month == 5 && day > 6 && day < 14) { console.log('第十周'); weekNow = 9 }
    else if (month == 5 && day > 13 && day < 21) { console.log('第十一周'); weekNow = 10 }
    else if (month == 5 && day > 20 && day < 28) { console.log('第十二周'); weekNow = 11 }
    else if (month == 5 && day > 27 && day < 32) { console.log('第十三周'); weekNow = 12 }
    else if (month == 6 && day > 0 && day < 4) { console.log('第十三周'); weekNow = 12 }
    else if (month == 6 && day > 3 && day < 11) { console.log('第十四周'); weekNow = 13 }
    else if (month == 6 && day > 10 && day < 18) { console.log('第十五周'); weekNow = 14 }
    else if (month == 6 && day > 17 && day < 25) { console.log('第十六周'); weekNow = 15 }
    else if (month == 6 && day > 24 && day < 31) { console.log('第十六周'); weekNow = 15 }
    else if (month >= 7) { console.log('第十六周 学期结束'); weekNow = 15 }
    else { console.log('第一周 没开学'); weekNow = 0 }
    this.setData({
      weekIndex: weekNow
    })  
  },

  bindPickerChange: function (e) {
    this.setData({
      weekIndex: e.detail.value
    })
  },

  showCardView: function(event) {
    console.log(event)
    if (event.currentTarget.id == "互联网应用@3-437"){
      wx.showModal({
        showCancel: false,
        content: "1-16周 教三-437 \n时岩老师",
      })
    }
    else if (event.currentTarget.id == "通原@3-437"){
      wx.showModal({
        showCancel: false,
        content: '1-16周 教三-437 \n韦再雪老师'
      })
    }
    else if (event.currentTarget.id == "移动互联网@3-435") {
      wx.showModal({
        showCancel: false,
        content: '1-16周 教三-435 \n徐鹏老师'
      })
    }
    else if (event.currentTarget.id == "数字广播@3-437") {
      wx.showModal({
        showCancel: false,
        content: '2,7,10,14周 教三-437 \nFaisal Tariq'
      })
    }
    else if (event.currentTarget.id == "软件工程@3-437") {
      wx.showModal({
        showCancel: false,
        content: '2,8,11,14周 教三-437 \nLing Ma & Matthew Huntbach'
      })
    }
    else if (event.currentTarget.id == "3D设计@3-437") {
      wx.showModal({
        showCancel: false,
        content: '3,5,7,12周 教三-437 \nMarie-luce Bourguet'
      })
    }
  },

  onShareAppMessage: function () {
    return {
      title: '伊卡课程表',
      desc: '电管二班课程表!',
      path: '/pages/erban/erban?id=3',
      success: function(res){
        console.log("二班分享成功")
      },
      fail: function(res){
        console.log("二班分享失败")
      }
    }
  }
})
