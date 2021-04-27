import "./registration.scss";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import { useState } from "react";

function Registration4() {
  const [{ register }, dispatch] = useStateValue();
  const items = [
    "6 months",
    "6 months - 1 yr",
    "1 yr - 2 yr",
    "2+ yrs",
    "No plans as of now",
  ];
  const [selected, setSelected] = useState("");
  const history = useHistory();
  console.log({ register });

  //------------------Methods---------------
  const handleSelection = (e) => {
    const { name } = e.target;
    setSelected(name);
  };

  //-----------Render-----------------------
  return (
    <div className="registration-form">
      <form className="input-form">
        <div className="name">
          <label>When do you plan to settle on</label>
          <CustomRadioButton
            items={items}
            selected={selected}
            onClick={handleSelection}
          />
        </div>
      </form>
    </div>
  );
}

export default Registration4;
