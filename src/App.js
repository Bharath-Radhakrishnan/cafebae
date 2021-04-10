//---------------Packages-------------------------
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useStateValue } from "./StateProvider";
import { userActionTypes } from "./reducers/user/user.types";
//----------------Services------------------------------
import AuthenticationService from "./services/authenticationservice";
//------------Stylesheet--------------------------------
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//---------------Components-------------------------
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
//---------------Pages-------------------------
import Homepage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import About from "./pages/about/about";
import Dashboard from "./pages/dashboard/dashboard";
import Registration1 from "./pages/registration/registration-1";
import ProtectedRoute from "./components/protected-route/protected-route";

function App() {
  const [{}, dispatch] = useStateValue();
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
          AuthenticationService.saveCredentials(snapShot.data());
        });
      } else {
        dispatch({
          type: userActionTypes.SET_CURRENT_USER,
          payload: { currentUser: null },
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute
            exact
            path="/register1"
            component={Registration1}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/dashboard"
            component={Dashboard}
          ></ProtectedRoute>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
