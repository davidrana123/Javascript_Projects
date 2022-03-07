import React,{useState} from "react"

let Validation = () => {
    const [user, setUser] = useState("")
    const [error,setError] = useState(false)
    const [pass,userPass] = useState("")
    const [errpass, userErrpass] = useState(false)
    let loginHandil =  (e) => {
        if(user.length<3 || pass.length<4){
            alert("type correct value")
        }
        else{
            alert("Welcome to my website")
        }
        e.preventDefault()
    }
    let userHandler = (e) => {
        const Uname = (e.target.value);
        if(Uname.length < 3){
            setError(true)
        }else{
            setError(false)
        }
        setUser(Uname)
    }
    let userPassword = (e) => {
        const Upass = (e.target.value)
        if(Upass.length < 4){
            userErrpass(true)
        }
        else{
            userErrpass(false)
        }
        userPass(Upass)
    }
    return (
        <div>
            <h1>7_Form_Validation</h1>
             <form onSubmit={loginHandil}>
                 <input type="text" placeholder="Enter User Id" onChange={userHandler}/>{error?<span>User not valid</span>:""}
                 <br />
                 <br />
                 <input type="password" placeholder="Enter User Password" onChange={userPassword}/>{errpass?<span>password not valid</span>:""}
                 <br />
                 <br />
                 <button type="submit">Login</button>
             </form>
        </div>
    )
}

export default Validation;