import React from 'react'
import {Component} from 'react'

function User(props){
 return(
    <div id="user">
        <img src={props.img} width="100" height="100"/>
        <label>Username: John</label>
        <label>Contact Number: 023436566454</label>
        <label>Email Address: john@yahoo.com</label>
        
    </div>
 )

}
export default User;