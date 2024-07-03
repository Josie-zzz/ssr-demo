import React, { useEffect, useRef, useState, useTransition, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { pathOptions } from '@/utils/routerConfig'

const Loading = () => {
    return <div>loading.....</div>
}

const NavBar = () => {
    return (
        <nav>
            <ul>
                {pathOptions.map(v => {
                    return (
                        <li key={v.path}>
                            <Link to={v.path}>{v.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Redirect path="/" to="/testWorkLoop" exact />
                    {pathOptions.map(v => {
                        return <Route path={v.path} component={v.component} exact={v?.exact || true} />
                    })}
                </Switch>
            </Suspense>
        </div>
    )
}

export default App
