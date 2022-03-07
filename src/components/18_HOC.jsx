import React,{useState} from "react"

let HOC = () => {
    return (
        <div>
            <h1>18_HOC</h1>
            <HigherOC cmp={Child}/>
            <HigherOCGreen cmp={Child} />
        </div>
    )
}

export default HOC; 

let HigherOC = (props) => {
    return <h2 style={{backgroundColor:'red',width:'100'}}><props.cmp /></h2>
}
let HigherOCGreen = (props) => {
    return <h2 style={{backgroundColor:'green',width:'100'}}><props.cmp /></h2>
}

let Child = () => {
    const[count,setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Update</button>
        </div>
    )
}