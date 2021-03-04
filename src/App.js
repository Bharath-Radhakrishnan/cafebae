import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import About from "./pages/about/about";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useStateValue } from "./StateProvider";
import { userActionTypes } from "./reducers/user/user.types";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        //If user logged in
        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: userActionTypes.SET_CURRENT_USER,
            payload: {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
          });
        });
      } else {
        dispatch({
          type: userActionTypes.SET_CURRENT_USER,
          payload: { currentUser: null },
        });
      }
    });
  }, []);
  console.log("user-----------", user, "auth", auth);
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
