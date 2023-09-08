import React from 'react'
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
     MDBCheckbox
  }from 'mdb-react-ui-kit';
const Login = () => {

  const navigate = useNavigate();

  let [user,setUser] = useState({
      email:"",
      password:""
  })

  let [userError, setUserError] = useState({
      emailError: "",
      passwordError: "",
    });

 
    useEffect(()=>{
      // ReviewSorting();
      },[])
      


    let validateEmail = (event) => {
      setUser({ ...user, email: event.target.value });
      let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
      !regExp.test(event.target.value)
        ? setUserError({ ...userError, emailError: "Enter a proper Email" })
        : setUserError({ ...userError, emailError: "" });
    };

    let validatePassword = (event) => {
      setUser({ ...user, password: event.target.value });
      if (event.target.value.trim() == "")
        setUserError({ ...userError, passwordError: "Enter a proper Password" });
      else setUserError({ ...userError, passwordError: "" });
    };
   let submitlogin =async(e)=>{
      e.preventDefault();

        // console.log(user);

        if (user.email !== "" && user.password !== "") {
        //   let email=user.email;
        //   let password = user.password;
      //  const {status,data}=await axios.post('https://feedbacksystem-p2.onrender.com/api/users/login',{email,password},{
      //     headers:{
      //       "Content-Type":"application/json"
      //     }
      //   })
        let status = 200;
        if(status==201){
          Swal.fire("Invalid credentials","", "error");
        }else if(status==200){
           Swal.fire("Login successful","", "success");
          //  localStorage.setItem("jwtlogin", data.token);
           navigate("/Mp");
        }
        
      } 
      else {
        Swal.fire("oh no!", "Something went wrong! Try again", "error");
      }
        


   }

  let WBACK=()=>{
    navigate('/')
  }




  return (
<>
<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-4">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name ="email"  value= {user.email} onChange={validateEmail}/>
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
        <MDBInput wrapperClass='mx-5 mt-4 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" name="password" value={user.password} onChange={validatePassword}/>
        <div className='d-flex mt-1  mb-3  '>

            <MDBCheckbox name='flexCheck' id='flexCheckDefault'  className="" label='Remember me ' />
          </div>
      
        {/* <p className="small mb-3"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
        <MDBBtn outline className='mx-2 px-5 mb-2' color='white' size='lg' onClick={submitlogin}>
          Login
        </MDBBtn>
        <div >
          <p className="mb-0" onClick={WBACK}>Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>

</>
  )
}

export default Login