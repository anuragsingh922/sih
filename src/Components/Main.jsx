import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Howwework from "./Howwework";
function Main() {
  const [data, setdata] = useState({ location: "" });

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    const textToType = "Discover the closest e-waste disposal sites near you.";
    if (index < textToType.length) {
      setTimeout(() => {
        setText(textToType.slice(0, index + 1));
        setIndex(index + 1);
      }, 70);
    }
  }, [index]);
  


  

  return (
    <>
      <div className="back">
        <div className="heading">
          {text}
        </div>

        <div className="search">
          <div className="searchmain">
            <form action="">
              <input
                type="text"
                className="searchinput"
                placeholder="e-waste"
                name="location"
                onChange={onChange}
                required
              />
              <button className="Started">Get Started</button>
            </form>
          </div>
        </div>

        <div className="cat">
          <ul>
            <li className="catli">CT Scan</li>
            <li className="catli"> MRI</li>
            <li className="catli">Bone Scan</li>
            <li className="catli"> Calcium Test</li>
            <li className="catli"> Cholesterol Test</li>
            <li className="catli"> DNA Test</li>
            <li className="catli"> Insulin Test</li>
            <li className="catli">Platelet Count</li>
          </ul>
        </div>
      </div>

      <div className="options">
        <ul className="optionsul">
          <li className="optionsli">
            <div className="optionsli_image">
              <img
                src="https://media.istockphoto.com/id/1387310509/photo/woman-putting-an-old-appliance-in-the-waste-bin.jpg?s=612x612&w=0&k=20&c=UBD_06Bgp-r5gccmoooenenK2333468OARZMoF96xPY="
                alt="Imagee"
              />
            </div>
            <div className="optionsli_details">
              <h3 className="optionsli_details_h3">Facility Finder</h3>
            </div>
          </li>
          <li className="optionsli">
            <div className="optionsli_image">
              <img
                src="https://media.istockphoto.com/id/474704407/vector/computers-waste.jpg?s=612x612&w=0&k=20&c=COAzDRkjXdkz9r5bWAlv2JmDtj9ik4GsGMKBwPtzWgo="
                alt="Imagee"
              />
            </div>
            <div className="optionsli_details">
              <h3 className="optionsli_details_h3">Facility Finder</h3>
            </div>
          </li>
          <li className="optionsli">
            <div className="optionsli_image">
              <img
                src="https://media.istockphoto.com/id/185234332/photo/electronics-recycling.jpg?s=612x612&w=0&k=20&c=KJ7tsHt8r9Dx3zRc6y3XJo2e0ymF7z0JC4jPzNK499E="
                alt="Imagee"
              />
            </div>
            <div className="optionsli_details">
              <h3 className="optionsli_details_h3">Facility Finder</h3>
            </div>
          </li>

          <Link to="/locator">
            <li className="optionsli">
              <div className="optionsli_image">
                <img
                  src="https://media.istockphoto.com/id/1430371779/photo/recycling-electronic-waste.jpg?s=612x612&w=0&k=20&c=idfcQt6wb9vP1OlZdUo25tKI9abbqm0uCNQBGFcKkyg="
                  alt="Imagee"
                />
              </div>
              <div className="optionsli_details">
                <h3 className="optionsli_details_h3">Facility Locator</h3>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {<Howwework />}
      </div>
      <footer>© E-Paras </footer>
    </>
  );
}

export default Main;
