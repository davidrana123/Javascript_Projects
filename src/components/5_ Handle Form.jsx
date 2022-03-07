import React,{useState} from "react"

let Form = () => {
    const [name,setName] = useState("")
    const [int,setInt] = useState("")
    const [tnc,setTnc] = useState(false)
    const [login,setLogin] = useState(2)

    function getFormData(e){
        console.log(name,tnc,int)
        e.preventDefault()
    }
    return (
        <div>
            <h1>5_Form</h1>
            <form onSubmit={getFormData}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name" /><br /><br />
                <select onChange={(e) => setInt(e.target.value)}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/><span>Accept Terms and conditions</span><br /><br />
            <button type="submit">Submit</button>
            </form><br /><br />
            <h1>6_Conditional rendering</h1>
            <h2>Add 2 condition</h2>
            {
               login?<h3>You are Logined</h3>:<h3>You are not logined in</h3> 
            }
            <button onClick={() => setLogin(!login)}>StatusLogin</button>

            <h2>Add 3 condition</h2>
           {
               login==1?<h4>i am one</h4>:login==2?<h4>i am 2</h4>:login==4?<h4>i am four</h4>:<h5>i am nothing</h5>
           }
        </div>
    )
}

export default Form;