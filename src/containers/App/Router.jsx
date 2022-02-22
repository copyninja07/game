/* eslint-disable */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import MainWrapper from "./MainWrapper";

import LogIn from "../LogIn/index";
import User from "../User/index";
import UserManagement from "../UserManagement/index";
import Page from "../page/index";
import GameRules from "../page/index";

const Pages = () => (
  <Switch>
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/page" component={Page} />
    <Route path="/user" component={User} />
    <Route path="/gameRules " component={Page} />
    <Route path="/ " component={Page} />
    <Route path="/ " component={Page} />
    <Route path="/ " component={Page} />
    <Route path="/ " component={Page} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
