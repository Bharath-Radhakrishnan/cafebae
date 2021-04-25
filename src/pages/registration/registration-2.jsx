import "./registration.scss";
import { useStateValue } from "../../StateProvider";
import { registerActionTypes } from "../../reducers/register/register.types";
import { useHistory } from "react-router";
function Registration2() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();
  console.log({ register });

  //--------Render---------------------
  return <div>"Registration2"</div>;
}

export default Registration2;
