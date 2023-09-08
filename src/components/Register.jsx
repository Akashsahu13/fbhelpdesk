import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}from 'mdb-react-ui-kit';
import { useState } from 'react';
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate= useNavigate();

    let [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    let [userError, setUserError] = useState({
        emailError: "",
        passwordError: "",

      });

      let validateCre = (e) => {
        setUser({...user , [e.target.name]:e.target.value}) 
        // console.log(e.target.name);
        // console.log(e.target.value);
       
      }
      
     

      let validateEmail = (event) => {
        setUser({ ...user, email: event.target.value });
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        !regExp.test(event.target.value)
          ? setUserError({ ...userError, emailError: "Enter a proper Email" })
          : setUserError({ ...userError, emailError: "" });
      };

      let validatePassword = (event) => {
        setUser({ ...user, password: event.target.value });
          //  console.log(user)

        if (event.target.value.trim() == "")
          setUserError({ ...userError, passwordError: "Enter a proper Password" });
        else setUserError({ ...userError, passwordError: "" });
      };
      
     


      let submitRegistration= async(event)=>{
        event.preventDefault();
        if (
          user.name !== "" &&
          user.email !== "" &&
          user.password !== ""
        ) {
          
        // let name = user.name.trim();
        // let email = user.email.trim();

        // let password = user.password.trim();
        
        
          console.log("done");
          // this is me /
          // const { status } = await axios.post(
          //   "https://feedbacksystem-p2.onrender.com/api/users/register",
          //   { name , email , password , Gender, Dob},
          //   {
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }
          // );
        let status=200;


        if (status == 201){
          Swal.fire("User already exists","", "error");
          return;
        }else if(status == 200){
           Swal.fire("Registration successful","", "success");
           navigate("/login");
        } 
      }
      else{
        // console.log("failsed")
        alert("Enter some Creditentail");
      }
      
        }


  return (
<>
<MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <MDBCard className='m-5 bg-dark text-white ' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5 ">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' labelClass='text-white' size='lg' id='form1' type='text' name='name' value={user.name} onChange={validateCre}/>
          <MDBInput wrapperClass='mb' label='Your Email' labelClass='text-white' size='lg' id='form2' type='email' value= {user.email}onChange={validateEmail}/>
          {
                user.email.length>0?
                <small>   
              {userError.emailError.length > 0 ? (
                    <small className="text-danger">
                      {userError.emailError}
                    </small>
                  ) : (
                    ""
                  )}
                </small>:
                ""
             }
          <MDBInput wrapperClass='mb-4 mt-4' label='Password' size='lg' labelClass='text-white'  id='form3' type='password' onChange={validatePassword}/>
          <div className='d-flex flex-row  mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Remember me ' />
          </div>
          <MDBBtn className='mb-4 w-100' size='lg' onClick={submitRegistration}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

</>
  )
}

export default Register