## chuanglan

**chuanglan-demo-nodejs**

## nodejs参数填写说明
```
//参数的配置 请登录zz.253.com 获取以下API信息 ↓↓↓↓↓↓↓
// API账号
var account="";
// API密码
var password="";
//接口域名
var sms_host = ''; 

//手机号码
var phone="";

// 设置您要发送的内容：其中“【】”中括号为运营商签名符号，多签名内容前置添加提交
var msg="【253云通讯】您的验证码是123456。如非本人操作，请忽略。";

// 普通短信发送URL
var send_sms_uri = '/msg/send/json';

//余额查询的URL
var query_balance_uri = '/msg/balance/json';
```



## 源码说明 

- 编码要求为utf-8,请先将编辑器底层语言设置为utf-8

- 带有特殊字符的内容无法直接提交,需先将特殊字符进行urlencode编码后方能提交

- 开发API可参考单元测试 doc/253云通讯PaaS短信云接口说明（JSON版）.docx



## 联系我们


[创蓝客服 链接](https://kefu253.udesk.cn/im_client/?web_plugin_id=47820={"name":"github"})


<img src="doc/kefu.jpg" width="20%" alt="创蓝客服"/>



## 文档链接- [api文档](https://www.253.com/#/document/api_doc/zz)
