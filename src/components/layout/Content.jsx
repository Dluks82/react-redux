import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
import Fundaments from "../../projects/fundaments/Fundaments";

import "./Content.css";

const Content = (props) => {
  return (
    <main className="content">
      <Switch>
        <Route path="/fundaments">
          <Fundaments />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
