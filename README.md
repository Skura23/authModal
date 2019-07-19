### 一个简单的小程序授权弹窗组件  
调用示例:  
`<authModal bind:confirmEvent="confirmclick" hasCancelBtn="{{false}}" url="你的接口地址"></authModal>`  
![alt text](https://raw.githubusercontent.com/Skura23/authModal/master/demo.png)

+ 属性   
  + **hasCancelBtn** 是否有取消按钮,type: String, 默认: true
  + **url** 接口更新地址,type: String, 默认: ''
+ 事件   
  + **bindcancelEvent** 取消按钮事件
  + **bindconfirmEvent** 确认按钮事件
