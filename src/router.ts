import React from "react";

const TestState = React.lazy(() => import('@/pages/TestState'))
const TestWorkLoop = React.lazy(() => import('@/pages/TestWorkLoop'))
const TestHook = React.lazy(() => import('@/pages/TestHook'))

export {
    TestState,
    TestWorkLoop,
    TestHook,
}