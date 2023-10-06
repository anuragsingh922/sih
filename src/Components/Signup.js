import React , {useState} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup(props) {

  const [signupdata , setsigndata] = useState({name: "" , email: "" , password: ""})

  const navigate = useNavigate()

  const submit = async(e)=>{
    e.preventDefault();
    const responce = await fetch("http://localhost:5000/api/auth/signup",{
      method:'POST',
      headers : {
        'Content-Type' : 'application/json'
      },

      body : JSON.stringify({name:signupdata.name , email: signupdata.email , password: signupdata.password})

  });

  const json = await responce.json()
  console.log(json);

  if(json.success){
    localStorage.setItem('token' , json.authtoken)
    navigate('/login');
    props.showalert("Sign Up Successfully " , 'success');
  }
  else{
    props.showalert("Check Details Again" , 'danger')
  }

  }

  const onChange = (e)=>{
    setsigndata({...signupdata , [e.target.name] : e.target.value});
  }

  return (
    <div className='main'>
    <div className="first">
    <div className="logo"><Link to='/' className='logolink'>E-PARAS</Link></div>
      <div className="heading">Signup</div>
      <div className="formdiv">


        <form className="form" onSubmit={submit} >
          <input type="text" className="email" id='name' name='name' placeholder='Name'  onChange={onChange} /><br />
          <input type="email" className="email" id='email' name='email' placeholder='Email' onChange={onChange} /><br />
          <input type="password" id='password' name='password' className="password" placeholder='Password' onChange={onChange}/>
          <button className='loginbutton'>Sign Up</button>
        </form>


      </div>
    </div>

    <div className="second">
      <div className="secondheading">Already have a account?</div>
      <Link to='/login'><div className='signupbuttondiv'>Login</div></Link>
    </div>
  </div>
  )
}

export default Signup
