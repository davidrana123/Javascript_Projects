import React,{useEffect,useState} from "react"
import Child from "../components/11_chile"


let UseEffect = () => {
    const[count,setCount]=useState(10);
    const[data,setData] = useState(100);
    return (
        <div>
            <h1>10_UseEffect</h1>
            <Child data={data} count={count}/>
            <button onClick={() => setCount(count+1)}>up count</button>
            <button onClick={() => setData(data+1)}>up data</button>
        </div>
    )
}

export default UseEffect;