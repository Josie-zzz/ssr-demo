import React, { useEffect, useRef, useState, useTransition, Suspense } from 'react'
import { TestState, TestWorkLoop, TestHook } from '@/router'
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

console.log(<TestState />)

const App = () => {
    return (
        <div className="app">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/testState">testState</Link>
                            </li>
                            <li>
                                <Link to="/testWorkLoop">testWorkLoop</Link>
                            </li>
                            <li>
                                <Link to="/testHook">TestHook</Link>
                            </li>
                        </ul>
                    </nav>
                    <Suspense>
                        <Switch>
                            <Redirect path='/' to="/testWorkLoop" exact />
                            <Route path="/testState" component={TestState} exact />
                            <Route path="/testWorkLoop" component={TestWorkLoop} exact />
                            <Route path="/testHook" component={TestHook} exact />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </div>
    )
}

export default App
