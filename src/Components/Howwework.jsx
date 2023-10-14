import React from 'react'
import './Howwework.css';

const Howwework = () => {
  return (
    <section className="how-we-work">
      <div className="container">
        <h2>How We Work</h2>
        <div className="steps">
          <div className="step1">
            <h3 className="stepsHeading">Create an Account</h3>
            <p>Sign up to get started with our e-waste recycling program.</p>
          </div>
          <div className="step2">
            <h3 className="stepsHeading">Identifying the device</h3>
            <p>select the model name or uplaod images of the device</p>
          </div>
          <div className="step3">
            <h3 className="stepsHeading">Excepted Credits</h3>
            <p> You will get the rough overview of the rewards that they will be getting upon recycling</p>
          </div>
          <div className="step4">
            <h3 className="stepsHeading">Finding Facility</h3>
            <p> have to choose their adress for finding nearest ewaste facility and have to choose pickup by deleivery partner or self pickup option</p>
          </div>
          <div className="step5">
            <h3 className="stepsHeading">Utilizing credits</h3>
            <p> all the pickup rewards will be credited to their account and which can used to redeem many giftcards and more</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Howwework