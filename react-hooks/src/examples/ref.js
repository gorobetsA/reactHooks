// import React, {useEffect, useState, useRef} from 'react'
//
// function App() {
//     // const [renderCount, setRenderCount] = useState(1)
//     const [value, setValue] = useState('initial')
//     const renderCount = useRef(1)
//     const inputRef = useRef(null)
//     const prevValue = useRef('')
//
//     useEffect(() => {
//         renderCount.current++
//         console.log(inputRef.current.value)
//     })
//
//     const focus = () => inputRef.current.focus()
//
//     useEffect(() => {
//         prevValue.current = value
//     },[value])
//
//
//
//     return (
//         <div >
//             <h1> Render quantity : {renderCount.current}</h1>
//             <h2>Previous state: {prevValue.current}</h2>
//             <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
//             <button className="btn btn-success" onClick={focus}>Focus</button>
//         </div>
//     )
// }
//
// export default App
//
