import React, { useState } from 'react'
import "./Join.css"
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";

let user;
const Join = () => {
    const [name, setname] = useState("");

const senduser=()=>{
    user=document.getElementById("joininput").value;
    document.getElementById("joininput").value="";
}

    return (
        <div className='joinPage'>
            <div className='joinContainer'>  
            <img src={logo} alt="logo"/>            
                <h1>YnotChat</h1>
                <input onChange={(e)=>setname(e.target.value)} placeholder='Enter your name' type="text" id="joininput"/>
                <Link onClick={(event)=>!name? event.preventDefault():null} to="/chat"> <button onClick={senduser} className='joinbtn'>login</button></Link>

            </div>
            
        </div>
    )
}

export default Join
export{user}
