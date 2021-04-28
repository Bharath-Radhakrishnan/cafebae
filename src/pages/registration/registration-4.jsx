import "./registration.scss";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import { useState } from "react";
import { registerActionTypes } from "../../reducers/register/register.types";

function Registration4() {
  const [{ register }, dispatch] = useStateValue();
  const items = [
    {label:"6 months",value:1 },
    {label:"6 month - 1yr",value:2 },
    {label:"1yr - 2yr",value:3 },
    {label:"2+yrs",value:4 },
    {label:"No plans as of now",value:5 }
  ];
  const [selected, setSelected] = useState("");
  const [{availability,bio},setData]=useState({availability:"",bio:""})
  const history = useHistory();
  console.log({ register });

  //------------------Methods---------------
  const handleSelection = (e) => {

    const {value } = e.target;
    setSelected(value);
  };

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData(prevState=>({...prevState,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log({selected,availability,bio});
    const isValid = validate();
    if (isValid) {
      dispatch({
        type: registerActionTypes.ADD_REGISTER_DATA,
        payload: {
          settlementYear:selected,
          availability,
          bio,
        },
      });
      history.push("/register5");
    }
  };
  const validate = () => {
    let isValid = true;
    if(selected==="") isValid = false;
    if (availability === "") isValid = false;
    if (bio === "") isValid = false;
    return isValid;
  };
  //-----------Render-----------------------
  return (
    <div className="registration-container">
      <form className="input-form" onSubmit={handleSubmit}>
      <label>When do you plan to settle on</label>
          <CustomRadioButton
            items={items}
            selected={selected}
            onClick={handleSelection}
          />
        <div className="name">
          <label htmlFor="availability">Your Availability?</label>
          <input
            type="text"
            placeholder="name"
            name="availability"
            id="availability"
            value={availability}
            onChange={handleChange}
          />
          <label htmlFor="bio">About you</label>
          <textarea
            placeholder="bio"
            name="bio"
            id="bio"
            value={bio}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration4;
