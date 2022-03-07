import React from "react"
import Home from "../components/19_Home"
import About from "../components/20_About"
import {Route,Link,Switch} from "react-router-dom"
import Nav from "../components/21_Nav"
import Page from "../components/22_404_Page"

let Rou = () => {
    return (
        <div>
            <h1>Route</h1>
                <Nav />
                <Switch >
                <Route path="/" exact={true}><Home /></Route>
                <Route path="/about" exact={true}><About /></Route>
                <Route path="*"><Page /></Route>
                </Switch>
           
        </div>
    )
}

export default Rou;