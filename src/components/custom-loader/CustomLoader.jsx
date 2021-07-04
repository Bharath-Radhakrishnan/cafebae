import Loader from "react-loader-spinner";
import "./CustomLoader.scss";
function CustomLoader() {
  return (
    <div className="loader-container">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default CustomLoader;
