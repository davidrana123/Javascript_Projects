import React,{useState} from "react"

let Input = () => {
    const [data,setData] = useState(null)
    const [print,setPrint] = useState(false)
    let getData = (val)  => {
        console.log(val.target.value)
        setData(val.target.value);
        setPrint(false)
    }
    return (
        <div>
            <h1>3_Get Input box value</h1>
            <input type="text" onChange={getData}></input>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <p>button click me print</p>
            <button onClick={() => setPrint(true)}>Print Data</button>
        </div>
    )
}
export default Input;