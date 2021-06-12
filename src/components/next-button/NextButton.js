import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./NextButton.scss";
function NextButton() {
  return (
    <div className="btn-container">
      <button className="nextButton">
        <span className="text">Next</span>
        <div className="icon-container">
          <div className="icon icon--left">
            <ArrowBackIosIcon />
          </div>
          <div className="icon icon--right">
            <DoubleArrowIcon />
          </div>
        </div>
      </button>
    </div>
  );
}

export default NextButton;
