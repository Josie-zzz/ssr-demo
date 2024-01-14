import React, { useEffect, useRef } from "react"
import crowd1 from '../../assets/crowd1.png'
import legend from '../../assets/legend-bar.svg'
// console.log(crowd1)
console.log(legend, typeof legend)

const App = () => {
    // const ref = useRef()

    return (
        <div className="box">
            {/* app */}
            <div dangerouslySetInnerHTML={{
                __html: legend
            }}></div>
        </div>
    )
}

export default App