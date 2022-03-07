import React from "react";
import {Table} from "react-bootstrap"
import Reuse from "../components/13_Reuse"


let Nested = () => {
    const user = [
        {name:"raja",email:"raaj@gmail.com", address: [
            {Hn:"10",city:"khatima",country:"India"},
            {Hn:"34",city:"delhi",country:"India"},
            {Hn:"23",city:"dwarika",country:"India"},
            {Hn:"10",city:"raam",country:"India"},
        ]},
        {name:"raja",email:"raaj@gmail.com", address: [
            {Hn:"10",city:"khatima",country:"India"},
            {Hn:"34",city:"delhi",country:"India"},
            {Hn:"23",city:"dwarika",country:"India"},
            {Hn:"10",city:"raam",country:"India"},
        ]},
        {name:"raja",email:"raaj@gmail.com", address: [
            {Hn:"10",city:"khatima",country:"India"},
            {Hn:"34",city:"delhi",country:"India"},
            {Hn:"23",city:"dwarika",country:"India"},
            {Hn:"10",city:"raam",country:"India"},
        ]},
        {name:"raja",email:"raaj@gmail.com", address: [
            {Hn:"10",city:"khatima",country:"India"},
            {Hn:"34",city:"delhi",country:"India"},
            {Hn:"23",city:"dwarika",country:"India"},
            {Hn:"10",city:"raam",country:"India"},
        ]},  
    ]
    return (
        <div>
            <h1>12_Nested</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                {
                    user.map((item,i) =>
                        <tr key={i}>
                        <td>{i}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{
                            item.address.map((data) => 
                            <tr>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                        </tr>
                            )
                            }</td>
                    </tr>
                    )
                }
            </Table>
            <h1>13_Reuse</h1> 
            {
                user.map((pro)=> 
                <Reuse data={pro}/>
                )
            }
        </div>
    )
}

export default Nested; 