import React from 'react'
import { useEffect } from 'react';
import { useSyncExternalStore } from 'react';
import { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBScrollbar,
} from "mdb-react-ui-kit";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "@emotion/css";
import socket from "../socket";

const ROOT_CSS = css({
  height: 500,
  width: "100%",
});

const Mainpage = () => {
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    data_rec: "",
  });
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typing, setTyping] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [textEnable, setTextEnable] = useState(true);
  const [textEnablePrivate, setTextEnablePrivate] = useState(true);



  // User joined and message
  useEffect(() => {
    socket.on("user joined", (msg) => {
      console.log("user joined message", msg);
    });

    socket.on("message", (data) => {
      console.log("message", message);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          id: data.id,
          name: data.name,
          message: data.m.data_rec,
          type: data.m.type,
        },
      ]);
    });

    return () => {
      socket.off("user joined");
      socket.off("message");
    };
  }, []);






  

  const handleMessage = (e) => {
    let t;
    // if (textEnable == true) t = "text";
    // else t = "im";

    console.log(message);
    e.preventDefault();
    socket.emit("message", {
      id: Date.now(),
      name: username,
      m: { type: t, data_rec: message.data_rec },
    });
    setMessage({ type: "", data_rec: "" });
    // console.log("Heeeee")
  };
let highlogh=(e)=>{
  e.target.setcolor('blue');

}

  return (
<>
<div className="d-flex flex-wrap" style={{
  height:"100vh"
}}>
  <div class=" d-flex w-25">
    <div className='col-md-2 bg-primary '>
    <div className='d-flex flex-column m-2 p-2 gap-4 '>
      <ul className='navbar-nav d-flex flex-column gap-3'>
        <li className="nav-item">
        <i class="fas fa-plug  " onSelect={highlogh} ></i>
        </li>
        <li className="nav-item" >
        <i class="fas fa-inbox  " onSelect={highlogh}></i>
        </li>
        <li className="nav-item">
        <i class="fas fa-user-group " onSelect={highlogh}></i>
        </li>
        <li className="nav-item">
        <i class="fas fa-chart-line" onSelect={highlogh}></i>
        </li>
      </ul>
   
   
  
    
    </div>
    
    </div>
    <div className='col-md-11'  style={{
    backgroundColor: '#eff2f7',
  }}>
     <div className='btn w-100 fw-bold text-uppercase d-flex gap-2 align-items-center justify-content-between' >
  
     <div className='d-flex gap-2 align-items-center'>
     <i class="fas fa-align-left"></i>
     Conservation
     </div>
     <div className='me-4'>
     <i class="fas fa-arrow-rotate-right float"></i> 
       
     </div>
      </div>
  </div>
    </div>
  <div class=" d-flex  w-75" bg-dark>

  <div className='col-md-9' style={{
    backgroundColor:"#F6F6F6"
  }}>

<div className='btn w-100 fw-bold text-uppercase d-flex gap-2 align-items-center justify-content-between' >
  
     <div className='d-flex gap-2 align-items-center'>
     <i class="fas fa-align-left"></i>
     (UserName)
     </div>      
        </div>
        <div className='m-3 p-2  '>
        <ScrollToBottom className={ROOT_CSS}>
                {selectedUser &&
                  selectedUser.messages &&
                  selectedUser.messages.map((msg, index) => (
                    <div key={index} className="alert alert-secondary">
                      {msg.fromSelf
                        ? "(yourself)"
                        : selectedUser.username}{" "}
                      {" - "}
                      {/* {msg.message} */}
                      {msg.type == "text" && msg.message}
                    </div>
                  ))}
              </ScrollToBottom>
        </div>
     
     <div className='d-flex m-3  '>
     <input type="text"className='form-control' 
     value={message.data_rec}
     onChange={(e) =>
       setMessage({ ...message, data_rec: e.target.value })
     }

     />
  <button className='btn  btn-primary' onClick={handleMessage}>Send</button>
     </div>
  


  </div>
  
  <div class="col-md-3
  "
  style={{
    backgroundColor: '#eff2f7',
  }}
  >Mesaager data</div>
  </div>
  
</div>
</>
  )
}

export default Mainpage