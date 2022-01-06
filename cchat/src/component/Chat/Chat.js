import React, { useEffect,useState} from 'react'
import {user} from "../Join/Join.js";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendlogo from "../../images/send.png";

const ENDPOINT="http://localhost:4500/";

const Chat = () => {

const socket=socketIo(ENDPOINT, {  
    cors: {
    origin: "http://localhost:4500",
    credentials: true
  },transports : ['websocket'] });
  

useEffect(() => {
    socket.on('connect',()=>{
        alert("Connected");
    })

    console.log(socket);
    socket.emit('joined',{user});

    socket.on('welcome',(data)=>{
        console.log(data.user,data.message);
    })


    return () => {
        
    }
}, [])

    return (
        <div className='chatpage'>
            <div className='chatcontainer'>
                <div className='header'></div>
                <div className='chatbox'></div>
                <div className='inputbox'>
                <input type="text" id='chatinput' />
                <button className='sendBtn'><img src={sendlogo} alt="send" /></button>
                </div>
            </div>
        </div>
    )
}

export default Chat
