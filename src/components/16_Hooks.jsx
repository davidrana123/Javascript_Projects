import React,{useRef} from "react"

let Hook = () => {
    let inputRef = useRef(null)
    function handelInput(){
        console.log("Function call")
        inputRef.current.value = "1000"
        inputRef.current.focus()
        //style add krne ke liye 
        inputRef.current.style.color="red"
    }
    return (
        <div>
            <h1>16_Hooks</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handelInput}>Handle Input</button>
        </div>
    )
}

export default Hook;