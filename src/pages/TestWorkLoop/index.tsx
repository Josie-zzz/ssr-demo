import React from 'react'

// 调试源码
class TestWorkLoop extends React.Component {
    componentDidMount() {
        console.log(`App Mount`)
        console.log(`App 组件对应的fiber节点: `, (this as any)._reactInternals)
    }

    render() {
        return (
            <div className="app">
                <header>header</header>
                <Content />
            </div>
        )
    }
}

class Content extends React.Component {
    componentDidMount() {
        console.log(`Content Mount`)
        console.log(`Content 组件对应的fiber节点: `, (this as any)._reactInternals)
    }
    render() {
        return (
            <React.Fragment>
                <p>1</p>
                <p>2</p>
            </React.Fragment>
        )
    }
}

export default TestWorkLoop
