import React from "react"
import { StaticRouter as Router } from 'react-router-dom'
import App from '../app'

const ServerApp = ({ path, assetMap }) => {
    return (
        <html>
            <head>
                <title>hello888</title>
                <link rel="stylesheet" href={assetMap['main.css']} />
            </head>
            <body>
                <div id="root">
                    <Router location={path}>
                        <App />
                    </Router>
                </div>
            </body>
        </html>
    )
}

export default ServerApp