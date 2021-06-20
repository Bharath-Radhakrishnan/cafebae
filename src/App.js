//---------------Packages-------------------------
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useStateValue } from "./StateProvider";
import { userActionTypes } from "./reducers/user/user.types";
//----------------Services------------------------------
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
import ProtectedRoute from "./components/protected-route/protected-route";

import Registration1 from "./pages/registration/registration-1";
import Registration2 from "./pages/registration/registration-2";
import Registration3 from "./pages/registration/registration-3";
import Registration4 from "./pages/registration/registration-4";
import Registration5 from "./pages/registration/registration-5";

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
            path="/register2"
            component={Registration2}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/register3"
            component={Registration3}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/register4"
            component={Registration4}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/register5"
            component={Registration5}
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
