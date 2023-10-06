import React, { useState } from 'react'
import './Signup.css'
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login(props) {

  const [logindata , setlogindata] = useState({email: "" , password: ""})

  const navigate = useNavigate()

  const submit = async(e)=>{
    e.preventDefault();
    const responce = await fetch("https://3948-2402-3a80-1bde-7655-8563-f524-12b1-80ef.ngrok-free.app/api/auth/login",{
        method: 'POST',
        headers : {
        "Accept": "application/json",
        'Content-Type' : 'application/json'
      },

      body : JSON.stringify({email: logindata.email , password : logindata.password})
  });

  const json = await responce.json();

    if(json.success){
        localStorage.setItem('token' , json.authtoken);
        localStorage.setItem('username' , json.user.name);
        localStorage.setItem('useremail' , json.user.email);
        navigate("/user");
        props.showalert("Login Successfully" , 'success');
        e.sendStatus(200);
    }
    else{
      props.showalert("Invalid Usename or passsword" , 'danger');
    }

  }


  const onChange = (e)=>{
    setlogindata({...logindata , [e.target.name] : e.target.value});
  }




  return (
    <div className='main'>
      <div className="first">
      <div className="logo"><Link to='/' className='logolink'>E-PARAS</Link></div>
        <div className="heading">Welcome, Login to your account</div>
        <div className="formdiv">


          <form onSubmit={submit} >
            <input type="email" id='email' className="email" name='email' onChange={onChange} value={logindata.email} placeholder='Email' /><br />
            <input type="text" id='password' className="password" name='password' onChange={onChange} value={logindata.password} placeholder='Password' />
            <button className='loginbutton'  type="submit" >Login</button>
          </form>


        </div>
      </div>

      <div className="second">
        <div className="secondheading">New here</div>
        <Link to='/signup'><div className='signupbuttondiv'>Signup</div></Link>
      </div>
    </div>
  )
}

export default Login
