import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Event from "./Component/Event/Event";
import PrivateRoute from "./Component/Login/PrivateRoute";
import { createContext, useState } from "react";

export const userContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  return (
    <userContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/event">
            <Event></Event>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
