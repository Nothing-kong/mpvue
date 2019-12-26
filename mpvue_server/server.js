let Koa = require('koa')
let KoaRouter = require('koa-router')

//生成应用
const app = new Koa()
const router = new KoaRouter()


//测试
// router.get('/',(ctx, next) => {
//   ctx.body = 123;
// })

//搜索图书的接口  
let datas = require('./datas/data.json')
router.get('/searchBooks',(ctx, next) => {
  //1.获取用户参数
  let req = ctx.query.req;
  //2.处理请求数据

  //3.返回响应数据
  ctx.body = datas
})

//声明使用路由
app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址：http://localhost:3000');
})
