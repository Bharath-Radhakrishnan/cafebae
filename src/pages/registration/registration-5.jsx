import "./registration.scss";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import genderList from "../../data/gender";
import { useState } from "react";

function Registration5() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();
  const items = genderList
  const [{age,occupation},setData] = useState({age:"",occupation:""})

  const [selected,setSelected] = useState("")
  const handleSubmit=()=>{}
  const handleSelection=(e)=>{
    const {value } = e.target;
    setSelected(value);
  }
  const handleChange =(e)=>{
    const {name,value}=e.target;
    setData(prevState=>({...prevState,[name]:value}))
  }
  return <div className="registration-container">
          <h1>Your Preferences</h1>
         <form className="input-form" onSubmit={handleSubmit}>
      <div className="name">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="age"
            name="age"
            id="age"
            value={age}
            onChange={handleChange}
          />
          <label htmlFor="bio">Any Preferences regarding your datae</label>
          <input
          type="text"
            placeholder="ex: #techie #banglore"
            name="occupation"
            id="occupation"
            value={occupation}
            onChange={handleChange}
          />
           <h4>Popular Choices</h4>
          <p>
            <span>#Product</span>
            <span>#Consultant</span>
            <span>#Doctor</span>
            <span>#Manager </span>
            <span>#Designer</span>
          </p>
          <p>
            <span>#Marketing</span>
            <span>#Techie</span>
            <span>#Enterpreneur</span>
            <span>#Business </span>
          </p>
        </div>
        <label>When do you plan to settle on</label>
          <CustomRadioButton
            items={items}
            selected={selected}
            onClick={handleSelection}
          />
        <button>Submit</button>
      </form>
  </div>;
}

export default Registration5;
