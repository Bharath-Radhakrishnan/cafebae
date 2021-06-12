import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./NextButton.scss";
function NextButton() {
  return (
    <div class="btn-container">
      <button className="nextButton">
        <span class="text">Next</span>
        <div class="icon-container">
          <div class="icon icon--left">
            <ArrowBackIosIcon />
          </div>
          <div class="icon icon--right">
            <DoubleArrowIcon />
          </div>
        </div>
      </button>
    </div>
  );
}

export default NextButton;
