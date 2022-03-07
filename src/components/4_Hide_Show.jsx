import React,{useState} from "react"

let Toggle = () => {
    const [status,setStatus] = useState(true) 
    return (
        <div>
            <h1>4_Hide_Show</h1>
            {
                status?<h2>i am show</h2>
                :null
            }
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <h2>Toggle</h2>
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default Toggle;