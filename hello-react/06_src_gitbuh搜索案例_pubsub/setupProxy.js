const proxy = require('http-proxy-middleware')


module.exports = function (app) {
    app.use(
        proxy('/api1',{ // 遇见api1前缀的请求会触发该代理
            target:"http://localhost:5000", // 请求转发对象
            changeOrigin:true, // 控制服务器收到的响应头中Host字段的值
            pathRewrite:{
                "^/api1":"" // 重写请求路径
            }
        })
    )
}


