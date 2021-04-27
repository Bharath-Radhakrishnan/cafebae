import "./registration.scss";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";

function Registration5() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();
  console.log({ register });
  return <div className="registration-form"></div>;
}

export default Registration5;
