import React from "react"

let Props = (props) => {
    return (
        <div>
            <h1>8_Props</h1>
            <p>{props.name}</p>
            <button onClick={() => props.myFun()}>Click me</button>
        </div>
    )
}

export default Props;