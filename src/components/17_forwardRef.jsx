import React,{forwardRef} from "react"

let Forword = (props,ref) => {
    return (
        <div>
            <h1>17_ForwordRef</h1>
           <input type="text" ref={ref}></input>
        </div>
    )
}

export default forwardRef(Forword);