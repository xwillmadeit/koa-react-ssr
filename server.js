import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import views from 'koa-views'
import convert from 'koa-convert'
import bodyParser from 'koa-bodyparser'
import { resolve } from 'path'
import webpack from 'webpack'
import devMiddleware from 'koa-webpack-dev-middleware'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import config from './webpack.config'

const app = new Koa()
const router = new Router()
const compiler = webpack(config)

router.get('/', (ctx, next) => {
  return ctx.render('template', {
    root: renderToString(<App />)
  })
})

router.post('/users', (ctx, next) => {
  ctx.body = ctx.request.body
})

app.use(bodyParser())
app.use(convert(devMiddleware(compiler)))
app.use(views(resolve(__dirname, 'views'), { map: { html: 'ejs' } }))
app.use(serve(resolve(__dirname, 'views')))
app.use(serve(resolve(__dirname, 'dist')))
app.use(router.routes()).use(router.allowedMethods())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`)
})
