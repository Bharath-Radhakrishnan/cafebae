import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/about" component={About}></Route>

          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
