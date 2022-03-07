import React from "react"

class Didmount extends React.Component {
    constructor(){
        super();
        console.log("constructer")
        this.state={
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.log("componentDidUpdate",preState)
    }

    render(){
        console.log("render")
        return (
            <div>
            <h1>ComponentDidUpdate = {this.state.count}</h1>
            <button onClick={() => {this.setState({count:this.state.count+1})}}>Increse count</button>
            </div>
        )
    }
}

export default Didmount;