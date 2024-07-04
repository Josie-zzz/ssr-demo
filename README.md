# 0 - 1 的一个 ssr 小 demo

这个分为两个部分，一个是服务端代码，一个是客户端代码

## 如果是生产环境
```javascript
// 打包前端代码，产生 manifest 文件
npm run build

// 编译服务端代码并执行，要注意注入的 js 和 css 资源是从 manifest 中匹配的，因为有 hash 值的原因
npm run server

```

## 如果是开发环境
```javascript
// 打包前端代码，资源需要指向开发者服务器的地址
npm run start

// 编译服务端代码并执行，要注意 js，css 资源是从开发者服务获取的
npm run server

```