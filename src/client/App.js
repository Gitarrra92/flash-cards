import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainPage from "./cards/views/MainPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Login from "./authentication/Login/views/Login";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path="/main" component={MainPage} />
            <Route path="/mycards">New card</Route>
            <Route path="/auth" component={Login} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
