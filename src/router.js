import React from "react";


const TestState = React.lazy(() => import(/* webpackChunkName: "TestState" */ '@/pages/TestState'));
const TestHook = React.lazy(() => import(/* webpackChunkName: "TestHook" */ '@/pages/TestHook'));

export {
    TestState,
    TestHook,
}