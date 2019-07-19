// components/authModal.js
const o = Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 控制是否有取消按钮
    hasCancelBtn: {
      type: Boolean,
      value: true
    },
    url: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancelclick() {
      this.triggerEvent('cancelEvent')
    },
    confirmclick(e) {
      let _this = this;
      var params = {
        data: e.detail.userInfo,
        iv: e.detail.iv,
      };

      wx.request({
        url:this.data.url, //仅为示例，并非真实的接口地址
        data: params,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          if (res.code == 1) {
            // 成功则触发回调
            _this.triggerEvent('confirmEvent')
          }
        }
      })
    }
  }
})