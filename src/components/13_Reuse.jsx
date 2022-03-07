import React from "react"

let Reuse = (props) => {
    return (
        <div>
           <span>{props.data.name}</span>
           <span>{props.data.email}</span>
        </div>
    )
}

export default Reuse;