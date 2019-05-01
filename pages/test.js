// pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      name:'张三',
      age:10
    },
    imgs:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556641245700&di=44a056a9e112d33c6c00877b9af9c100&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F7692%2Fa7691515_s.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556641279307&di=ade3674e1f3c2bba41decdfc3a51e18a&imgtype=0&src=http%3A%2F%2Fpic75.nipic.com%2Ffile%2F20150821%2F9448607_145742365000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556641302532&di=2dd25119456a08653f6948bee47a2c6b&imgtype=0&src=http%3A%2F%2Fpic26.nipic.com%2F20121219%2F2457331_085744965000_2.jpg',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    this.setData({
      userInfo:{
        name:'李四',
        age:20
      }
    })
    console.log(options);
  },
  /*
   * 自定义
  */
  upper: function (opt) {
    console.log('这里执行了uper');
    console.log(opt);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom');

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage');

  }
})