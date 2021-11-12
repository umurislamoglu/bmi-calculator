import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
