import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListContainer from "./components/ProductListContainer";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from "./components/NavigationComponent";
import AdministrationContainer from "./components/AdministrationContainer";
import ChangeUserContainer from "./components/ChangeUserContainer";
import ProductAdministrationContainer from "./components/ProductAdministrationContainer";
import ProductDisplayContainer from "./components/ProductDisplayContainer";

var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return (
    <div>
      Route did not match <br/>
      <button className="btn btn-primary" onClick={goApp}>Go Home</button>
    </div>
  );
};

var DemonstruotiNavigacija = (props) => {
  let { id } = props.match.params;

  document.title = "Svenciu registro programa | Pagalba";

  return (
    <div>
      At route: {props.location.pathname} (ID: {id})
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

document.title = "Svenciu registro programa";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <NavigationComponent>
      <Switch>
        <Route exact path="/" component={ProductListContainer} />
        <Route exact path="/products/" component={ProductListContainer} />
        <Route exact path="/products/:id" component={ProductDisplayContainer} />
        <Route exact path="/admin/" component={AdministrationContainer} />
        <Route exact path="/admin/:id" component={ProductAdministrationContainer} /> 
        <Route exact path="/help/:id" component={DemonstruotiNavigacija} />
        <Route exact path="/change-user" component={ChangeUserContainer} />
        <Route path="*" component={NoMatch} />
		<Route component={NoMatch} />
      </Switch>
    </NavigationComponent>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
