import { TestState, TestHook } from '@/router'

const pathOptions = [
    {
        path: '/testState',
        name: 'testState',
        component: TestState,
    },
    {
        path: '/testHook',
        name: 'testHook',
        component: TestHook,
    },
]

export {
    pathOptions
}