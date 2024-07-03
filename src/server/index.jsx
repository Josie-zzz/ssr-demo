import express from 'express'
import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'
import { renderToString, renderToPipeableStream } from 'react-dom/server'
import App from '@/pages/app'
import ServerApp from '../pages/WebApp/serverIndex'
import assetMap from '../../dist/manifest.json'
const app = express()
const port = 4000
const prefix = '/api/'

app.use(express.static('dist'))

// const getContent = (path = '') => {
//     return renderToString((
//         <Router location={path} basename='/client'>
//             <App />
//         </Router>
//     ))
// }

// // console.log(content)

// app.get(/^\/client\//, (req, res) => {
//     console.log(req.path, 'path....')
//     const content = getContent(req.path)
//     res.send(`
// <!DOCTYPE html>
// <html>
// <head>
//     <title>hello888</title>
//     <script defer src="http://localhost:3009/main.js"></script>
// </head>
// <body>
//     <div id="root">${content}</div>
// </body>
// </html>
//     `)
// })

// 流式服务端渲染
app.get('*', (req, res) => {
    console.log(req.path, 'path....')
    const str = JSON.stringify(assetMap)
    const { pipe, abort } = renderToPipeableStream(<ServerApp path={req.path} assetMap={assetMap} />, {
        bootstrapScripts: [assetMap['main.js']],
        bootstrapScriptContent: `window.assetMap=${str}`,
        onShellReady: () => {
            console.log('onShellReady......')
            res.setHeader('content-type', 'text/html;charset=utf-8')
            pipe(res)
        },
        onAllReady: () => {
            console.log('onAllReady。。。')
        },
        onError: () => {
            console.error('onError。。。')
        },
        onShellError: e => {
            console.error('onShellError.....', e)
        },
    })

    // 设置一个超时时间，终止服务端渲染
    setTimeout(() => {
        abort()
    }, 10 * 1000)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
