import React,{useState,useMemo} from "react"

let Usememo = () => {
    const [count,setCount] = useState(1)
    const [num, setNum] = useState(1)
    const multicountMemo = useMemo(function multiCount(){
        console.log("multicount")
        return count*5
    },[count])

    return (
        <div>
            <h1>14_Usememo</h1>
            <p>{count}</p>
            <p>{multicountMemo}</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
            <p>{num}</p>
            <button onClick={() => setNum(num+1)}>IncressNum</button>
        </div>
    )
}

export default Usememo;