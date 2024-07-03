import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../app'

const WebApp = ({ assetMap }) => {
    return (
        <html>
            <head>
                <title>hello888</title>
                <link rel="stylesheet" href={assetMap['main.css']} />
            </head>
            <body>
                <div id="root">
                    <Router>
                        <App />
                    </Router>
                </div>
            </body>
        </html>
    )
}

export default WebApp
