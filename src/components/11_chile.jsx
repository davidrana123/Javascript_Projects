import React,{useEffect} from "react"

let Child = (props) => {
    useEffect(() => {
        console.log("data")
    },[])
    return (
        <div>
            <h1>11_Child</h1>
           <p>data is =  {props.data}</p>
           <p>count is = {props.count}</p>
        </div>
    )
}

export default Child;