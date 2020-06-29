// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:"1", text:"HTML", bg : "gold", url : "pages/html/html"},
      {id:"2", text:"CSS", bg : "lightgreen", url : "pages/css/css"},
      {id:"3", text:"JavaScript", bg : "lightcoral", url : "pages/javascript/javascript"},
      {id:"4", text:"JQuery", bg : "lightSeaGreen", url : "pages/jquery/jquery"},
      {id:"5", text:"Ajax", bg : "tomato", url : "pages/ajax/ajax"},
      {id:"6", text:"Git", bg : "pink", url : "pages/git/git"},
      {id:"7", text:"NodeJS", bg : "orange", url : "pages/nodejs/nodejs"},
      {id:"8", text:"Vue", bg : "skyblue", url : "pages/vue/vue"},
      {id:"9", text:"React", bg : "limeGreen", url : "pages/react/react"},
      {id:"10", text:"webpack", bg : "moccasin ", url : "pages/webpack/webpack"},
      {id:"12", text:"Python", bg : "lightcoral", url: "pages/python/python"},
      {id:"11", text:"面试题", bg : "lightgrey", url : "pages/exam/exam"}
    ]
  },

  navigateHandler :function(e){
    console.log(e.currentTarget.dataset.url);
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: "../../"+url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})