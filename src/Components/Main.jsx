import React, { useState } from 'react';
import "./Main.css";

function Main() {

    const [data , setdata] = useState({location : ""});

  const onChange = (e)=>{
    setdata({...data , [e.target.name] : e.target.value});
  }

  return (
    <>
     <div className="back">
    <div className='heading'>Discover the closest e-waste disposal sites near you.</div>

    <div className="search">
      <div className="searchmain">
        <input type="text" className='searchinput' placeholder='Search for doctor' name='location' onChange={onChange}/>
        <button className='Started'>Get Started</button>
        </div>
    </div>

      <div className="cat">
        <ul>
          <li className='catli' >CT Scan</li>
          <li className='catli'> MRI</li>
          <li className='catli'>Bone Scan</li>
          <li className='catli'> Calcium Test</li>
          <li className='catli'> Cholesterol Test</li>
          <li className='catli'> DNA Test</li>
          <li className='catli'> Insulin Test</li>
          <li className='catli'>Platelet Count</li>
        </ul>
      </div>
    </div>



    <div className="options">
        <ul className='optionsul'>
            <li className="optionsli">
                <div className="optionsli_image">
                    <img src="../Images/main_image.jpg" alt="" />
                </div>
                <div className="optionsli_details">
                    <h3 className="optionsli_details_h3">
                        Facility Finder
                    </h3>
                </div>
            </li>
            <li className="optionsli">
            <div className="optionsli_image">
                    <img src="../Images/main_image.jpg" alt="" />
                </div>
                <div className="optionsli_details">
                    <h3 className="optionsli_details_h3">
                        Facility Finder
                    </h3>
                </div>
            </li>
            <li className="optionsli">
            <div className="optionsli_image">
                    <img src="../Images/main_image.jpg" alt="" />
                </div>
                <div className="optionsli_details">
                    <h3 className="optionsli_details_h3">
                        Facility Finder
                    </h3>
                </div>
            </li>
            <li className="optionsli">
            <div className="optionsli_image">
                    <img src="../Images/main_image.jpg" alt="" />
                </div>
                <div className="optionsli_details">
                    <h3 className="optionsli_details_h3">
                        Facility Finder
                    </h3>
                </div>
            </li>
        </ul>
      </div>






    <footer>© E-Paras </footer>
    </> 
  )
}

export default Main
