import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Event from "./Components/Event/Event";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import UserVolunteerList from "./Components/UserVolenteerList/UserVolunteerList";

//context api
export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({
    isLogged: false,
    email: "",
    name: "",
  });
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/login" component={LogIn} />
            <Route path="/event" component={Event} />
            <Route
              exact
              path="/userVolunteerList"
              component={UserVolunteerList}
            />
            <PrivateRoute path="/register">
              <Register />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
