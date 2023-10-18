import React from 'react'
// import React, { useState } from 'react'
import './Navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link, NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Navbar(props) {

  // const leave = ()=>{
  //     const arrow = document.getElementById('arrowicon');

  //     arrow.animate([
  //         { transform: 'rotate(180deg)'},
  //         { transform: 'rotate(0deg)'}
  // ], {
  //   duration: 1000/2,
  //       }
  //     )
  // }

  const navigate = useNavigate();




  return (<>
    <div className="navbar">
      <div className="navfirst">
        <ul className="ul">
            <Link to={localStorage.getItem("token")?"/user":"/"}><li className="li name" >E-PARAS</li></Link>

            <li className="li hoverli"  id='hoverli'>E-Waste Facilities<KeyboardArrowDownIcon className='liicon'  id='arrowicon'/>
            <div className="hove"  id='hove'>
            <div className="hovefirst">
                <div className="statelist">Delhi</div>
                <div className="statelist">Haryana</div>
                <div className="statelist">Punjab</div>
                <div className="statelist">Utter Pardesh</div>
                <div className="statelist">Rajasthan</div>
                <div className="statelist">H.P.</div>
                <div className="statelist">Uttrakhand</div>
                <div className="statelist">J&K</div>
                <div className="statelist">M.P.</div>
              </div>
            </div>
            </li>

            {/* <li className="li hoverli">Treatments<KeyboardArrowDownIcon className='liicon'/>
            <div className="hove" >
              <div className="hovefirst">
                    <div className="statelist">Platelet Count</div>
                    <div className="statelist">Abdominal hysterectomy</div>
                    <div className="statelist">Abdominal pain</div>
                    <div className="statelist">Acupuncture</div>
                    <div className="statelist">Back pain</div>
                    <div className="statelist">Bad breath</div>
                    <div className="statelist">Bladder cancer</div>
                    <div className="statelist">Blood pressure test</div>
                    <div className="statelist">Bowel cancer</div>
                    <div className="statelist">Clinical Pilates</div>
                    <div className="statelist">Coughing</div>
                    <div className="statelist">Crepitus</div>
                    <div className="statelist">Joint pain</div>
                </div>
              </div>
            </li> */}

            <li className="li hoverli"data-bs-toggle="dropdown">Why E-PARAS<KeyboardArrowDownIcon className='liicon' id='arrowicon3'/>
            <div className="hove">
              <div className="whycarehover">
                <div className="whycarehoverfirst">
                  <div className="hello hello1">
                    <div className="helloheading">About Us</div>
                    <div className="muted">About us</div>
                  </div>
                  <div className="hello ">
                  <div className="helloheading">Reviews</div>
                    <div className="muted">Reviews</div>
                  </div>
                </div>
                <div className="whycarehoversecond">
                  <div className="hello hello1">
                  <div className="helloheading">Team</div>
                    <div className="muted">Team</div></div>
                  <div className="hello">
                  <div className="helloheading">Goal</div>
                    <div className="muted">Goal</div></div>
                </div>
              </div>
            </div>
            </li>

            {/* <Link to={'/hospital'}><li className={`li ${props.selected==="hospital"?"selected":""}`}>About</li></Link>

            <Link to={'/doctor'}><li className={`li ${props.selected==="doctor"?"selected":""}`}>Team</li></Link> */}
        </ul>
      </div>


      <div className="navsecond">
        <ul className="navsecondul">
            <NavLink to="/login" className='link'><button className='buttonlogin'>Login</button></NavLink>
            <NavLink to="/signup"><button className='buttonsign'>Sign Up</button></NavLink>
        </ul>
      </div>
      </div>
      </>
  )
}

export default Navbar
