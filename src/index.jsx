import React from "react";
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.less'

/** 客户端渲染 */
// import { HashRouter as Router } from 'react-router-dom'
// const domNode = document.getElementById('root')
// const root = createRoot(domNode)
// root.render((
//     <Router><App /></Router>
// ))

/** 配合服务端 api renderToString  使用的 ssr */
import { BrowserRouter as Router } from 'react-router-dom'
import App from './pages/app'
const domNode = document.getElementById('root')
const NewApp = (
    <Router>
        <App />
    </Router>
)
hydrateRoot(domNode, NewApp)

/** 配合流式渲染 api renderToPipeableStream 使用的 ssr  */
// import AllApp from "./pages/WebApp";
// hydrateRoot(document, <AllApp assetMap={window.assetMap} />)