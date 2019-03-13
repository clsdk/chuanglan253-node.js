const http = require('http');

/* 参数的配置 请登录zz.253.com 获取以下API信息 ↓↓↓↓↓↓↓ */
// API账号
let account = "";
// API密码
let password = "";
//接口域名
let host = '';


/* 发送短信方法 ↓↓↓↓↓↓↓ */
const sendSms = (options) => { // option:发送提交的参数
    let params = JSON.stringify(options);
    post("/msg/send/json", params);
}

/* 余额查询方法 ↓↓↓↓↓↓↓ */
const getBlance = (options) => { // option:查询余额提交的参数
    let params = JSON.stringify(options);
    post("/msg/balance/json", params);
}

/* 发送请求过程，可根据自身系统处理 ↓↓↓↓↓↓↓ */
function post(url, params) {
    let options = {
        protocol: "http:", // 创蓝所有接口支持https和http协议，建议https
        hostname: host,
        port: 80,
        path: url,
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    };
    const req = http.request(options, res => {
        console.log(`状态码: ${res.statusCode}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`返回参数: ${chunk}`);
        });
    });
    req.write(params);
    req.end();
}



/* 发送短信实例模拟 ↓↓↓↓↓↓↓ */
sendSms({
    "account": account, // 必传，API账号，管理后台获取
    "password": password, // 必传，API密码，管理后台获取（8-16位)
    "msg": "【253云通讯】您的验证码是123456。如非本人操作，请忽略。", // 审核通过的签名以及模板，长度不超过536个字符
    "phone": "15121060862" // 必传，接收的手机号；多个手机号使用英文逗号间隔，一次不要超过1000个；
    // "sendtime": "" // 可不传，定时发送时间的时间戳
    // "report": flase, // 可不传，是否需要状态报告，默认false；如需状态报告则传”true”
    // "extend": 253, // 可不传，下发短信号码扩展码,建议1-3位
    // "uid": "2018abc" // 可不传，该条短信在您业务系统内的ID，如订单号或者短信发送记录流水号
});

/* 查询余额实例模拟 ↓↓↓↓↓↓↓ */
getBlance({
    "account": account, // 必传，API账号，管理后台获取
    "password": password, // 必传，API密码，管理后台获取（8-16位)
})
